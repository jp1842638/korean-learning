// ===== Lesson System =====
// Manages lesson flow, stage loading, and progress tracking

const LessonSystem = {
    currentChapter: null,
    currentStage: null,
    currentLesson: null,

    // Load a specific stage
    loadStage(chapterId, stageId) {
        this.currentChapter = chapterId;
        this.currentStage = stageId;

        const chapter = LessonContent.chapters[chapterId];
        const stage = chapter.stages[stageId];

        if (!stage) {
            console.error('Stage not found:', chapterId, stageId);
            return;
        }

        this.currentLesson = stage;

        // Update UI
        document.getElementById('lesson-title').textContent = stage.title;

        // Check stage type
        if (stage.type === 'minigame') {
            this.loadMinigame(stage);
        } else {
            this.loadQuizLesson(stage);
        }
    },

    // Load a quiz-based lesson
    loadQuizLesson(stage) {
        // Show lesson view, hide minigame view
        document.getElementById('lesson-view').classList.remove('hidden');
        document.getElementById('minigame-view').classList.add('hidden');

        // Initialize quiz system
        QuizSystem.init(stage.content);
        QuizSystem.render();
    },

    // Load a minigame
    loadMinigame(stage) {
        // Show minigame view, hide lesson view
        document.getElementById('lesson-view').classList.add('hidden');
        document.getElementById('minigame-view').classList.remove('hidden');

        // Get game configuration
        const gameConfig = LessonContent.minigames[stage.gameId];
        
        if (!gameConfig) {
            console.error('Minigame config not found:', stage.gameId);
            return;
        }

        // Update game title
        document.getElementById('game-title').textContent = stage.title;

        // Initialize minigame
        MiniGame.init(gameConfig, stage.quests);
    },

    // Complete current stage
    completeStage(stars) {
        if (!this.currentChapter || !this.currentStage) return;

        // Save progress
        StorageManager.completeStage(this.currentChapter, this.currentStage, stars);

        // Update chapter view if visible
        App.updateChapterView(this.currentChapter);
    },

    // Retry current stage
    retryStage() {
        if (!this.currentLesson) return;

        // Hide completion modal
        document.getElementById('completion-modal').classList.add('hidden');

        if (this.currentLesson.type === 'minigame') {
            MiniGame.reset();
        } else {
            QuizSystem.reset();
            QuizSystem.render();
        }
    },

    // Continue to next stage
    continueToNext() {
        // Hide completion modal
        document.getElementById('completion-modal').classList.add('hidden');

        // Stop minigame if running
        MiniGame.stop();

        // Calculate next stage
        let nextStage = this.currentStage + 1;
        let nextChapter = this.currentChapter;

        if (nextStage > 10) {
            nextStage = 1;
            nextChapter++;
        }

        // Check if next stage exists and is unlocked
        if (nextChapter <= 6 && StorageManager.isStageUnlocked(nextChapter, nextStage)) {
            this.loadStage(nextChapter, nextStage);
        } else {
            // Go back to chapter view
            App.showChapterView(this.currentChapter);
        }
    },

    // Exit current lesson
    exitLesson() {
        // Stop minigame if running
        MiniGame.stop();

        // Go back to chapter view
        App.showChapterView(this.currentChapter);
    },

    // Get stage status for display
    getStageStatus(chapterId, stageId) {
        const isUnlocked = StorageManager.isStageUnlocked(chapterId, stageId);
        const isCompleted = StorageManager.isStageCompleted(chapterId, stageId);
        const stars = StorageManager.getStageStars(chapterId, stageId);

        return {
            unlocked: isUnlocked,
            completed: isCompleted,
            stars: stars
        };
    },

    // Check if stage is a minigame
    isMinigame(chapterId, stageId) {
        const chapter = LessonContent.chapters[chapterId];
        const stage = chapter?.stages[stageId];
        return stage?.type === 'minigame';
    }
};