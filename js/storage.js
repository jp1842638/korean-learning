// ===== Storage Manager =====
// Handles all LocalStorage operations for user data and progress

const StorageManager = {
    KEYS: {
        NICKNAME: 'korean_learning_nickname',
        PROGRESS: 'korean_learning_progress',
        SETTINGS: 'korean_learning_settings'
    },

    // Initialize default progress structure
    getDefaultProgress() {
        return {
            chapters: {
                1: { unlocked: true, stages: this.getDefaultStages() },
                2: { unlocked: false, stages: this.getDefaultStages() },
                3: { unlocked: false, stages: this.getDefaultStages() },
                4: { unlocked: false, stages: this.getDefaultStages() },
                5: { unlocked: false, stages: this.getDefaultStages() },
                6: { unlocked: false, stages: this.getDefaultStages() }
            },
            totalStars: 0,
            completedStages: 0
        };
    },

    getDefaultStages() {
        const stages = {};
        for (let i = 1; i <= 10; i++) {
            stages[i] = {
                unlocked: i === 1,
                completed: false,
                stars: 0
            };
        }
        return stages;
    },

    // Nickname methods
    getNickname() {
        return localStorage.getItem(this.KEYS.NICKNAME);
    },

    setNickname(nickname) {
        localStorage.setItem(this.KEYS.NICKNAME, nickname);
    },

    hasNickname() {
        return this.getNickname() !== null && this.getNickname() !== '';
    },

    // Check if current user is Admin (case-sensitive)
    isAdmin() {
        return this.getNickname() === 'Admin';
    },

    // Progress methods
    getProgress() {
        const saved = localStorage.getItem(this.KEYS.PROGRESS);
        if (saved) {
            return JSON.parse(saved);
        }
        return this.getDefaultProgress();
    },

    saveProgress(progress) {
        localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(progress));
    },

    // Get chapter progress
    getChapterProgress(chapterId) {
        const progress = this.getProgress();
        return progress.chapters[chapterId];
    },

    // Check if chapter is unlocked
    isChapterUnlocked(chapterId) {
        // Admin has access to all chapters
        if (this.isAdmin()) {
            return true;
        }
        const progress = this.getProgress();
        return progress.chapters[chapterId]?.unlocked || false;
    },

    // Check if stage is unlocked
    isStageUnlocked(chapterId, stageId) {
        // Admin has access to all stages
        if (this.isAdmin()) {
            return true;
        }
        const progress = this.getProgress();
        return progress.chapters[chapterId]?.stages[stageId]?.unlocked || false;
    },

    // Check if stage is completed
    isStageCompleted(chapterId, stageId) {
        const progress = this.getProgress();
        return progress.chapters[chapterId]?.stages[stageId]?.completed || false;
    },

    // Get stage stars
    getStageStars(chapterId, stageId) {
        const progress = this.getProgress();
        return progress.chapters[chapterId]?.stages[stageId]?.stars || 0;
    },

    // Complete a stage
    completeStage(chapterId, stageId, stars) {
        const progress = this.getProgress();
        const stage = progress.chapters[chapterId].stages[stageId];
        
        // Only update if new stars are higher
        if (!stage.completed || stars > stage.stars) {
            const oldStars = stage.stars;
            stage.completed = true;
            stage.stars = Math.max(stage.stars, stars);
            progress.totalStars += (stage.stars - oldStars);
        }

        if (!stage.completed) {
            progress.completedStages++;
            stage.completed = true;
        }

        // Unlock next stage
        if (stageId < 10) {
            progress.chapters[chapterId].stages[stageId + 1].unlocked = true;
        } else {
            // Unlock next chapter if all stages completed
            if (chapterId < 6) {
                progress.chapters[chapterId + 1].unlocked = true;
                progress.chapters[chapterId + 1].stages[1].unlocked = true;
            }
        }

        this.saveProgress(progress);
        return progress;
    },

    // Get completed stages count for a chapter
    getChapterCompletedCount(chapterId) {
        const progress = this.getProgress();
        const stages = progress.chapters[chapterId].stages;
        let count = 0;
        for (let i = 1; i <= 10; i++) {
            if (stages[i].completed) count++;
        }
        return count;
    },

    // Get total stars for a chapter
    getChapterStars(chapterId) {
        const progress = this.getProgress();
        const stages = progress.chapters[chapterId].stages;
        let stars = 0;
        for (let i = 1; i <= 10; i++) {
            stars += stages[i].stars;
        }
        return stars;
    },

    // Reset all progress
    resetProgress() {
        localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(this.getDefaultProgress()));
    },

    // Clear all data
    clearAll() {
        localStorage.removeItem(this.KEYS.NICKNAME);
        localStorage.removeItem(this.KEYS.PROGRESS);
        localStorage.removeItem(this.KEYS.SETTINGS);
    }
};