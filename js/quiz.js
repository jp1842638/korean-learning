// ===== Quiz System =====
// Handles all quiz types: multiple-choice, translate, fill-blank, word-card

const QuizSystem = {
    currentQuestion: 0,
    questions: [],
    hearts: 3,
    correctAnswers: 0,
    selectedAnswer: null,
    isAnswered: false,

    // Initialize quiz with questions
    init(questions) {
        this.currentQuestion = 0;
        this.questions = questions;
        this.hearts = 3;
        this.correctAnswers = 0;
        this.selectedAnswer = null;
        this.isAnswered = false;
        // Count only actual quiz questions (not word-cards)
        this.totalQuizQuestions = questions.filter(q => q.type !== 'word-card').length;
        this.updateHeartsDisplay();
        this.updateProgressBar();
    },

    // Get current question
    getCurrentQuestion() {
        return this.questions[this.currentQuestion];
    },

    // Render current question
    render() {
        const question = this.getCurrentQuestion();
        const container = document.getElementById('lesson-content');
        
        if (!question) {
            this.complete();
            return;
        }

        this.isAnswered = false;
        this.selectedAnswer = null;

        switch (question.type) {
            case 'word-card':
                this.renderWordCard(container, question);
                break;
            case 'multiple-choice':
            case 'translate':
                this.renderMultipleChoice(container, question);
                break;
            case 'fill-blank':
                this.renderFillBlank(container, question);
                break;
            default:
                this.renderMultipleChoice(container, question);
        }
    },

    // Render word card (learning new words)
    renderWordCard(container, question) {
        const hasForms = question.formal && question.informal;
        
        // Clear container
        container.innerHTML = '';
        
        // Create quiz container
        const quizContainer = document.createElement('div');
        quizContainer.className = 'quiz-container';
        
        // Create word card
        const wordCard = document.createElement('div');
        wordCard.className = 'word-card';
        
        // Instruction
        const instruction = document.createElement('p');
        instruction.className = 'quiz-instruction';
        instruction.textContent = 'Learn this word:';
        wordCard.appendChild(instruction);
        
        // Korean text
        const korean = document.createElement('div');
        korean.className = 'word-card-korean';
        korean.textContent = question.korean;
        wordCard.appendChild(korean);
        
        // Romanization
        const romanization = document.createElement('div');
        romanization.className = 'word-card-romanization';
        romanization.textContent = question.romanization;
        wordCard.appendChild(romanization);
        
        // Meaning
        const meaning = document.createElement('div');
        meaning.className = 'word-card-meaning';
        meaning.textContent = question.meaning;
        wordCard.appendChild(meaning);
        
        // Forms (if available)
        if (hasForms) {
            const formsContainer = document.createElement('div');
            formsContainer.className = 'word-card-forms';
            
            const formalBox = document.createElement('div');
            formalBox.className = 'form-box formal';
            formalBox.innerHTML = `
                <div class="form-label">Formal (존댓말)</div>
                <div class="form-text">${question.formal}</div>
            `;
            formsContainer.appendChild(formalBox);
            
            const informalBox = document.createElement('div');
            informalBox.className = 'form-box informal';
            informalBox.innerHTML = `
                <div class="form-label">Informal (반말)</div>
                <div class="form-text">${question.informal}</div>
            `;
            formsContainer.appendChild(informalBox);
            
            wordCard.appendChild(formsContainer);
        }
        
        // Continue button
        const continueBtn = document.createElement('button');
        continueBtn.className = 'btn-primary quiz-submit';
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', () => {
            QuizSystem.nextQuestion();
        });
        wordCard.appendChild(continueBtn);
        
        quizContainer.appendChild(wordCard);
        container.appendChild(quizContainer);
    },

    // Render multiple choice question
    renderMultipleChoice(container, question) {
        const questionText = question.question || 'Select the correct answer:';
        const pronunciation = question.pronunciation || question.korean;
        
        container.innerHTML = `
            <div class="quiz-container">
                <p class="quiz-question">${questionText}</p>
                ${question.korean ? `
                    <div class="quiz-korean-text">${question.korean}</div>
                    ${question.romanization ? `<p class="quiz-romanization">${question.romanization}</p>` : ''}
                    <button class="" onclick="playKoreanAudio('${question.korean.replace(/'/g, "\\'")}', '${pronunciation.replace(/'/g, "\\'")}')">🔊 Listen</button>
                ` : ''}
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option" data-index="${index}" onclick="QuizSystem.selectOption(${index})">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <button class="btn-primary quiz-submit" onclick="QuizSystem.checkAnswer()" disabled>
                    Check Answer
                </button>
            </div>
        `;
    },

    // Render fill in the blank question
    renderFillBlank(container, question) {
        const sentenceParts = question.sentence.split('___');
        
        container.innerHTML = `
            <div class="quiz-container">
                <p class="quiz-question">${question.question}</p>
                <div class="fill-blank-sentence">
                    ${sentenceParts[0]}<span class="blank-space" id="blank-answer"></span>${sentenceParts[1] || ''}
                </div>
                <div class="word-bank">
                    ${question.options.map((option, index) => `
                        <div class="word-bank-item" data-index="${index}" data-word="${option}" onclick="QuizSystem.selectBlankOption(this, '${option}')">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <button class="btn-primary quiz-submit" onclick="QuizSystem.checkFillBlank()" disabled>
                    Check Answer
                </button>
            </div>
        `;
    },

    // Select option for multiple choice
    selectOption(index) {
        if (this.isAnswered) return;

        // Remove previous selection
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Add selection to clicked option
        const selected = document.querySelector(`.quiz-option[data-index="${index}"]`);
        selected.classList.add('selected');
        this.selectedAnswer = index;

        // Enable submit button
        document.querySelector('.quiz-submit').disabled = false;
    },

    // Select option for fill in the blank
    selectBlankOption(element, word) {
        if (this.isAnswered) return;

        // Remove previous selection
        document.querySelectorAll('.word-bank-item').forEach(item => {
            item.classList.remove('selected');
        });

        // Add selection
        element.classList.add('selected');
        document.getElementById('blank-answer').textContent = word;
        this.selectedAnswer = word;

        // Enable submit button
        document.querySelector('.quiz-submit').disabled = false;
    },

    // Check multiple choice answer
    checkAnswer() {
        if (this.isAnswered || this.selectedAnswer === null) return;

        this.isAnswered = true;
        const question = this.getCurrentQuestion();
        const isCorrect = this.selectedAnswer === question.correct;

        // Show correct/incorrect styling
        document.querySelectorAll('.quiz-option').forEach((opt, index) => {
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        this.handleResult(isCorrect);
    },

    // Check fill in the blank answer
    checkFillBlank() {
        if (this.isAnswered || this.selectedAnswer === null) return;

        this.isAnswered = true;
        const question = this.getCurrentQuestion();
        const isCorrect = this.selectedAnswer === question.answer;

        // Show correct/incorrect styling
        const blankSpace = document.getElementById('blank-answer');
        if (isCorrect) {
            blankSpace.style.borderColor = '#58cc02';
            blankSpace.style.color = '#58cc02';
        } else {
            blankSpace.style.borderColor = '#ff4b4b';
            blankSpace.style.color = '#ff4b4b';
            // Show correct answer
            setTimeout(() => {
                blankSpace.textContent = question.answer;
                blankSpace.style.borderColor = '#58cc02';
                blankSpace.style.color = '#58cc02';
            }, 1000);
        }

        document.querySelectorAll('.word-bank-item').forEach(item => {
            if (item.dataset.word === question.answer) {
                item.style.background = '#e8f5e9';
                item.style.borderColor = '#58cc02';
            } else if (item.classList.contains('selected') && !isCorrect) {
                item.style.background = '#ffebee';
                item.style.borderColor = '#ff4b4b';
            }
        });

        this.handleResult(isCorrect);
    },

    // Handle result (correct/incorrect)
    handleResult(isCorrect) {
        if (isCorrect) {
            this.correctAnswers++;
        } else {
            this.hearts--;
            this.updateHeartsDisplay();
            
            // Check if out of hearts
            if (this.hearts <= 0) {
                setTimeout(() => this.fail(), 1500);
                return;
            }
        }

        // Update button to continue
        const submitBtn = document.querySelector('.quiz-submit');
        submitBtn.textContent = 'Continue';
        submitBtn.onclick = () => this.nextQuestion();
        submitBtn.disabled = false;

        // Add visual feedback
        if (isCorrect) {
            submitBtn.classList.add('bounce');
        } else {
            document.querySelector('.quiz-container').classList.add('shake');
        }
    },

    // Move to next question
    nextQuestion() {
        this.currentQuestion++;
        this.updateProgressBar();

        if (this.currentQuestion >= this.questions.length) {
            this.complete();
        } else {
            this.render();
        }
    },

    // Update hearts display
    updateHeartsDisplay() {
        for (let i = 1; i <= 3; i++) {
            const heart = document.getElementById(`heart-${i}`);
            if (heart) {
                if (i > this.hearts) {
                    heart.classList.add('lost');
                } else {
                    heart.classList.remove('lost');
                }
            }
        }
    },

    // Update progress bar
    updateProgressBar() {
        const progress = (this.currentQuestion / this.questions.length) * 100;
        const progressFill = document.getElementById('lesson-progress-fill');
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
    },

    // Calculate stars based on performance
    calculateStars() {
        // Use only actual quiz questions count (not word-cards)
        const totalQuestions = this.totalQuizQuestions || this.questions.filter(q => q.type !== 'word-card').length;
        if (totalQuestions === 0) return 3; // All word-cards = perfect score
        const percentage = this.correctAnswers / totalQuestions;
        if (percentage >= 0.9) return 3;
        if (percentage >= 0.7) return 2;
        if (percentage >= 0.5) return 1;
        return 0;
    },

    // Complete the lesson
    complete() {
        const stars = this.calculateStars();
        const nickname = StorageManager.getNickname() || 'Learner';
        
        // Show completion modal
        const modal = document.getElementById('completion-modal');
        const message = document.getElementById('completion-message');
        const subtitle = document.getElementById('completion-subtitle');

        message.textContent = `Congrats, ${nickname}!`;
        // Use only actual quiz questions count (not word-cards)
        const totalQuestions = this.totalQuizQuestions || this.questions.filter(q => q.type !== 'word-card').length;
        if (totalQuestions === 0) {
            subtitle.textContent = `You learned ${this.questions.length} new words!`;
        } else {
            subtitle.textContent = `You got ${this.correctAnswers} out of ${totalQuestions} correct!`;
        }

        // Show stars with animation
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

        // Return result for saving
        return {
            stars: stars,
            correct: this.correctAnswers,
            total: this.questions.length
        };
    },

    // Fail the lesson (out of hearts)
    fail() {
        const nickname = StorageManager.getNickname() || 'Learner';
        
        const modal = document.getElementById('completion-modal');
        const message = document.getElementById('completion-message');
        const subtitle = document.getElementById('completion-subtitle');

        message.textContent = `Don't give up, ${nickname}!`;
        subtitle.textContent = `You ran out of hearts. Try again!`;

        // Hide stars
        for (let i = 1; i <= 3; i++) {
            const star = document.getElementById(`star-${i}`);
            star.classList.remove('earned');
        }

        // Hide continue button, show only retry
        document.getElementById('completion-continue').style.display = 'none';
        document.getElementById('completion-retry').style.display = 'block';

        modal.classList.remove('hidden');

        return {
            stars: 0,
            correct: this.correctAnswers,
            total: this.questions.length,
            failed: true
        };
    },

    // Reset for retry
    reset() {
        this.currentQuestion = 0;
        this.hearts = 3;
        this.correctAnswers = 0;
        this.selectedAnswer = null;
        this.isAnswered = false;
        this.updateHeartsDisplay();
        this.updateProgressBar();
        
        // Reset completion modal buttons
        document.getElementById('completion-continue').style.display = 'block';
        document.getElementById('completion-retry').style.display = 'block';
    }
};