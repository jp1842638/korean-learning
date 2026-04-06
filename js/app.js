// ===== Main Application =====
// Handles app initialization, navigation, and UI management

const App = {
    // Initialize the application
    init() {
        // Check if user has a nickname
        if (StorageManager.hasNickname()) {
            this.showApp();
        } else {
            this.showNicknameModal();
        }

        // Set up event listeners
        this.setupEventListeners();
    },

    // Set up all event listeners
    setupEventListeners() {
        // Nickname modal
        document.getElementById('nickname-submit').addEventListener('click', () => {
            this.submitNickname();
        });

        document.getElementById('nickname-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitNickname();
            }
        });

        // Change nickname button
        document.getElementById('change-nickname').addEventListener('click', () => {
            this.showNicknameModal();
        });

        // Navigation buttons
        document.getElementById('back-to-dashboard').addEventListener('click', () => {
            this.showDashboard();
        });

        document.getElementById('back-to-chapter').addEventListener('click', () => {
            LessonSystem.exitLesson();
        });

        document.getElementById('back-from-game').addEventListener('click', () => {
            LessonSystem.exitLesson();
        });

        // Completion modal buttons
        document.getElementById('completion-continue').addEventListener('click', () => {
            // Save progress first
            const stars = QuizSystem.calculateStars();
            LessonSystem.completeStage(stars);
            LessonSystem.continueToNext();
        });

        document.getElementById('completion-retry').addEventListener('click', () => {
            LessonSystem.retryStage();
        });
    },

    // Show nickname modal
    showNicknameModal() {
        const modal = document.getElementById('nickname-modal');
        const input = document.getElementById('nickname-input');
        
        // Pre-fill with existing nickname if any
        const existingNickname = StorageManager.getNickname();
        if (existingNickname) {
            input.value = existingNickname;
        }

        modal.classList.remove('hidden');
        input.focus();
    },

    // Submit nickname
    submitNickname() {
        const input = document.getElementById('nickname-input');
        const nickname = input.value.trim();

        if (nickname.length < 1) {
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 300);
            return;
        }

        StorageManager.setNickname(nickname);
        document.getElementById('nickname-modal').classList.add('hidden');
        this.showApp();
    },

    // Show main app
    showApp() {
        const nickname = StorageManager.getNickname();
        document.getElementById('display-name').textContent = nickname;
        document.getElementById('app').classList.remove('hidden');
        this.showDashboard();
    },

    // Show dashboard (chapter selection)
    showDashboard() {
        // Hide other views
        document.getElementById('chapter-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('minigame-view').classList.add('hidden');
        document.getElementById('completion-modal').classList.add('hidden');

        // Show dashboard
        document.getElementById('dashboard-view').classList.remove('hidden');

        // Render chapters
        this.renderChapters();
    },

    // Render chapter cards
    renderChapters() {
        const container = document.getElementById('chapters-container');
        container.innerHTML = '';

        for (let i = 1; i <= 6; i++) {
            const chapter = LessonContent.chapters[i];
            const isUnlocked = StorageManager.isChapterUnlocked(i);
            const completedCount = StorageManager.getChapterCompletedCount(i);
            const progressPercent = (completedCount / 10) * 100;

            const card = document.createElement('div');
            card.className = `chapter-card ${isUnlocked ? '' : 'locked'}`;
            card.innerHTML = `
                <div class="chapter-number">${i}</div>
                <h3>${chapter.title}</h3>
                <p>${chapter.description}</p>
                <div class="chapter-progress-mini">
                    <div class="fill" style="width: ${progressPercent}%"></div>
                </div>
                <span class="chapter-difficulty difficulty-${chapter.difficulty}">${chapter.difficultyLabel}</span>
            `;

            if (isUnlocked) {
                card.addEventListener('click', () => {
                    this.showChapterView(i);
                });
            }

            container.appendChild(card);
        }
    },

    // Show chapter view (stage selection)
    showChapterView(chapterId) {
        // Hide other views
        document.getElementById('dashboard-view').classList.add('hidden');
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('minigame-view').classList.add('hidden');
        document.getElementById('completion-modal').classList.add('hidden');

        // Show chapter view
        document.getElementById('chapter-view').classList.remove('hidden');

        // Update chapter info
        this.updateChapterView(chapterId);
    },

    // Update chapter view content
    updateChapterView(chapterId) {
        const chapter = LessonContent.chapters[chapterId];
        
        document.getElementById('chapter-title').textContent = `Chapter ${chapterId}: ${chapter.title}`;
        document.getElementById('chapter-description').textContent = chapter.description;

        // Update progress
        const completedCount = StorageManager.getChapterCompletedCount(chapterId);
        const progressPercent = (completedCount / 10) * 100;
        document.getElementById('chapter-progress').style.width = `${progressPercent}%`;
        document.getElementById('progress-text').textContent = `${completedCount}/10 completed`;

        // Render stages
        this.renderStages(chapterId);
    },

    // Render stage nodes
    renderStages(chapterId) {
        const container = document.getElementById('stages-container');
        container.innerHTML = '';

        const chapter = LessonContent.chapters[chapterId];

        for (let i = 1; i <= 10; i++) {
            const stage = chapter.stages[i];
            const status = LessonSystem.getStageStatus(chapterId, i);
            const isMinigame = stage.type === 'minigame';

            // Create connector (except for first stage)
            if (i > 1) {
                const connector = document.createElement('div');
                connector.className = 'stage-connector';
                container.appendChild(connector);
            }

            // Create stage node
            const node = document.createElement('div');
            let nodeClass = 'stage-node';
            
            if (status.completed) {
                nodeClass += ' completed';
            } else if (status.unlocked) {
                nodeClass += ' current';
            } else {
                nodeClass += ' locked';
            }

            if (isMinigame) {
                nodeClass += ' minigame';
            }

            node.className = nodeClass;
            node.innerHTML = status.completed ? '✓' : i;
            node.title = stage.title;

            if (status.unlocked) {
                node.addEventListener('click', () => {
                    this.startStage(chapterId, i);
                });
            }

            container.appendChild(node);
        }
    },

    // Start a stage
    startStage(chapterId, stageId) {
        // Hide chapter view
        document.getElementById('chapter-view').classList.add('hidden');

        // Load the stage
        LessonSystem.loadStage(chapterId, stageId);
    },

    // Show completion celebration
    showCompletion(stars, message) {
        const modal = document.getElementById('completion-modal');
        const messageEl = document.getElementById('completion-message');
        const subtitleEl = document.getElementById('completion-subtitle');

        const nickname = StorageManager.getNickname() || 'Learner';
        messageEl.textContent = `Congrats, ${nickname}!`;
        subtitleEl.textContent = message;

        // Animate stars
        for (let i = 1; i <= 3; i++) {
            const star = document.getElementById(`star-${i}`);
            star.classList.remove('earned');
            if (i <= stars) {
                setTimeout(() => {
                    star.classList.add('earned');
                }, i * 300);
            }
        }

        modal.classList.remove('hidden');
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Global function for word card continue button
window.handleWordCardContinue = function() {
    QuizSystem.nextQuestion();
};
