// ===== Mini Game System =====
// WASD movement game with NPC interactions and quests

const MiniGame = {
    canvas: null,
    ctx: null,
    player: null,
    npcs: [],
    quests: [],
    currentQuest: 0,
    completedQuests: [],
    isRunning: false,
    keys: {},
    mapType: 'village',
    dialogActive: false,
    currentNPC: null,

    // Player settings
    playerSize: 32,
    playerSpeed: 4,

    // Colors for pixel art style
    colors: {
        player: '#4a90d9',
        playerOutline: '#2d5a8a',
        npc: {
            grandmother: '#9b59b6',
            friend: '#e74c3c',
            teacher: '#27ae60',
            shopkeeper: '#f39c12',
            customer: '#3498db',
            waiter: '#1abc9c',
            stranger: '#95a5a6',
            sad: '#7f8c8d',
            excited: '#e91e63',
            worried: '#ff9800',
            receptionist: '#00bcd4',
            doctor: '#4caf50',
            teller: '#673ab7'
        },
        maps: {
            village: { bg: '#90EE90', path: '#DEB887', building: '#8B4513' },
            market: { bg: '#F5DEB3', path: '#D2691E', building: '#8B0000' },
            restaurant: { bg: '#FAEBD7', path: '#CD853F', building: '#A0522D' },
            street: { bg: '#E0E0E0', path: '#808080', building: '#696969' },
            park: { bg: '#98FB98', path: '#DEB887', building: '#228B22' },
            city: { bg: '#D3D3D3', path: '#A9A9A9', building: '#4682B4' }
        }
    },

    // Initialize the game
    init(gameConfig, quests) {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.mapType = gameConfig.mapType || 'village';
        this.npcs = gameConfig.npcs || [];
        this.quests = quests || [];
        this.currentQuest = 0;
        this.completedQuests = [];
        this.dialogActive = false;
        this.currentNPC = null;

        // Initialize player position
        this.player = {
            x: this.canvas.width / 2,
            y: this.canvas.height - 100,
            direction: 'down'
        };

        // Set up keyboard controls
        this.setupControls();

        // Update quest display
        this.updateQuestDisplay();

        // Start game loop
        this.isRunning = true;
        this.gameLoop();
    },

    // Set up keyboard controls
    setupControls() {
        document.addEventListener('keydown', (e) => {
            if (!this.isRunning) return;
            this.keys[e.key.toLowerCase()] = true;

            // E key for interaction
            if (e.key.toLowerCase() === 'e' && !this.dialogActive) {
                this.checkInteraction();
            }
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    },

    // Main game loop
    gameLoop() {
        if (!this.isRunning) return;

        this.update();
        this.render();

        requestAnimationFrame(() => this.gameLoop());
    },

    // Update game state
    update() {
        if (this.dialogActive) return;

        // Handle movement
        let dx = 0;
        let dy = 0;

        if (this.keys['w'] || this.keys['arrowup']) {
            dy = -this.playerSpeed;
            this.player.direction = 'up';
        }
        if (this.keys['s'] || this.keys['arrowdown']) {
            dy = this.playerSpeed;
            this.player.direction = 'down';
        }
        if (this.keys['a'] || this.keys['arrowleft']) {
            dx = -this.playerSpeed;
            this.player.direction = 'left';
        }
        if (this.keys['d'] || this.keys['arrowright']) {
            dx = this.playerSpeed;
            this.player.direction = 'right';
        }

        // Update position with bounds checking
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;

        if (newX > this.playerSize && newX < this.canvas.width - this.playerSize) {
            this.player.x = newX;
        }
        if (newY > this.playerSize && newY < this.canvas.height - this.playerSize) {
            this.player.y = newY;
        }
    },

    // Render the game
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw map background
        this.drawMap();

        // Draw NPCs
        this.drawNPCs();

        // Draw player
        this.drawPlayer();

        // Draw interaction hints
        this.drawInteractionHints();
    },

    // Draw the map
    drawMap() {
        const colors = this.colors.maps[this.mapType];

        // Background
        this.ctx.fillStyle = colors.bg;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw some decorative elements based on map type
        this.ctx.fillStyle = colors.path;
        
        // Main path
        this.ctx.fillRect(this.canvas.width / 2 - 40, 0, 80, this.canvas.height);
        this.ctx.fillRect(0, this.canvas.height / 2 - 30, this.canvas.width, 60);

        // Buildings/decorations
        this.ctx.fillStyle = colors.building;
        
        // Top left building
        this.ctx.fillRect(20, 20, 120, 80);
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillRect(60, 60, 30, 40);

        // Top right building
        this.ctx.fillStyle = colors.building;
        this.ctx.fillRect(this.canvas.width - 140, 20, 120, 80);
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillRect(this.canvas.width - 100, 60, 30, 40);

        // Bottom decorations (trees/bushes for park, benches for city, etc.)
        this.ctx.fillStyle = '#228B22';
        for (let i = 0; i < 5; i++) {
            this.ctx.beginPath();
            this.ctx.arc(80 + i * 160, this.canvas.height - 40, 20, 0, Math.PI * 2);
            this.ctx.fill();
        }
    },

    // Draw NPCs
    drawNPCs() {
        this.npcs.forEach(npc => {
            const color = this.colors.npc[npc.sprite] || '#666666';
            const isQuestTarget = this.isCurrentQuestTarget(npc.id);
            
            // Draw NPC body (pixel art style)
            this.ctx.fillStyle = color;
            this.ctx.fillRect(npc.x - 16, npc.y - 16, 32, 32);

            // Draw NPC outline
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(npc.x - 16, npc.y - 16, 32, 32);

            // Draw face
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.fillRect(npc.x - 8, npc.y - 8, 6, 6);
            this.ctx.fillRect(npc.x + 2, npc.y - 8, 6, 6);
            
            // Draw mouth
            this.ctx.fillStyle = '#333333';
            this.ctx.fillRect(npc.x - 6, npc.y + 4, 12, 3);

            // Draw quest indicator if this is the current quest target
            if (isQuestTarget) {
                this.ctx.fillStyle = '#FFD700';
                this.ctx.font = 'bold 20px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('!', npc.x, npc.y - 25);
            }

            // Draw completed indicator
            if (this.completedQuests.includes(npc.id)) {
                this.ctx.fillStyle = '#58cc02';
                this.ctx.font = 'bold 20px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('✓', npc.x, npc.y - 25);
            }

            // Draw NPC name
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(npc.name, npc.x, npc.y + 30);
        });
    },

    // Draw the player
    drawPlayer() {
        const x = this.player.x;
        const y = this.player.y;

        // Draw player body
        this.ctx.fillStyle = this.colors.player;
        this.ctx.fillRect(x - 16, y - 16, 32, 32);

        // Draw player outline
        this.ctx.strokeStyle = this.colors.playerOutline;
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - 16, y - 16, 32, 32);

        // Draw face based on direction
        this.ctx.fillStyle = '#FFFFFF';
        
        switch (this.player.direction) {
            case 'up':
                // Back of head
                break;
            case 'down':
                // Eyes
                this.ctx.fillRect(x - 8, y - 8, 6, 6);
                this.ctx.fillRect(x + 2, y - 8, 6, 6);
                // Mouth
                this.ctx.fillStyle = '#333333';
                this.ctx.fillRect(x - 4, y + 4, 8, 3);
                break;
            case 'left':
                // Side view
                this.ctx.fillRect(x - 10, y - 6, 6, 6);
                break;
            case 'right':
                // Side view
                this.ctx.fillRect(x + 4, y - 6, 6, 6);
                break;
        }

        // Draw "You" label
        this.ctx.fillStyle = '#4a90d9';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('You', x, y + 30);
    },

    // Draw interaction hints
    drawInteractionHints() {
        const nearbyNPC = this.getNearbyNPC();
        
        if (nearbyNPC && !this.dialogActive) {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            this.ctx.fillRect(nearbyNPC.x - 50, nearbyNPC.y - 55, 100, 25);
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Press E to talk', nearbyNPC.x, nearbyNPC.y - 38);
        }
    },

    // Check if NPC is the current quest target
    isCurrentQuestTarget(npcId) {
        if (this.currentQuest >= this.quests.length) return false;
        return this.quests[this.currentQuest].npc === npcId && !this.completedQuests.includes(npcId);
    },

    // Get nearby NPC
    getNearbyNPC() {
        const interactionDistance = 60;
        
        for (const npc of this.npcs) {
            const dx = this.player.x - npc.x;
            const dy = this.player.y - npc.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < interactionDistance) {
                return npc;
            }
        }
        return null;
    },

    // Check for interaction
    checkInteraction() {
        const npc = this.getNearbyNPC();
        if (!npc) return;

        this.currentNPC = npc;
        this.showDialog(npc);
    },

    // Show dialog with NPC
    showDialog(npc) {
        this.dialogActive = true;
        const dialogBox = document.getElementById('game-dialog');
        const speakerEl = dialogBox.querySelector('.dialog-speaker');
        const textEl = dialogBox.querySelector('.dialog-text');
        const optionsEl = dialogBox.querySelector('.dialog-options');

        speakerEl.textContent = npc.name;
        textEl.textContent = npc.dialog;

        // Check if this NPC has a quest
        const quest = this.quests.find(q => q.npc === npc.id && !this.completedQuests.includes(npc.id));
        
        if (quest && this.currentQuest < this.quests.length && this.quests[this.currentQuest].npc === npc.id) {
            // Show quest options
            optionsEl.innerHTML = quest.options.map((option, index) => `
                <div class="dialog-option" onclick="MiniGame.selectDialogOption('${option}', ${index})">
                    ${option}
                </div>
            `).join('');
        } else {
            // Just a close button
            optionsEl.innerHTML = `
                <div class="dialog-option" onclick="MiniGame.closeDialog()">
                    Close
                </div>
            `;
        }

        dialogBox.classList.remove('hidden');
    },

    // Select dialog option
    selectDialogOption(option, index) {
        const quest = this.quests[this.currentQuest];
        
        if (option === quest.correctAnswer) {
            // Correct answer!
            this.completedQuests.push(quest.npc);
            this.currentQuest++;
            
            // Show success message
            const textEl = document.querySelector('.dialog-text');
            const optionsEl = document.querySelector('.dialog-options');
            
            textEl.innerHTML = `<span style="color: #58cc02;">✓ Correct!</span><br><br>"${option}"<br><br>Great job!`;
            optionsEl.innerHTML = `
                <div class="dialog-option" onclick="MiniGame.closeDialog()">
                    Continue
                </div>
            `;

            // Update quest display
            this.updateQuestDisplay();

            // Check if all quests completed
            if (this.currentQuest >= this.quests.length) {
                setTimeout(() => {
                    this.complete();
                }, 500);
            }
        } else {
            // Wrong answer
            const textEl = document.querySelector('.dialog-text');
            textEl.innerHTML = `<span style="color: #ff4b4b;">✗ Not quite right.</span><br><br>Try again!`;
            
            // Re-show options after a moment
            setTimeout(() => {
                this.showDialog(this.currentNPC);
            }, 1500);
        }
    },

    // Close dialog
    closeDialog() {
        this.dialogActive = false;
        this.currentNPC = null;
        document.getElementById('game-dialog').classList.add('hidden');
    },

    // Update quest display
    updateQuestDisplay() {
        const questEl = document.getElementById('game-quest');
        
        if (this.currentQuest < this.quests.length) {
            const quest = this.quests[this.currentQuest];
            questEl.innerHTML = `<strong>Quest ${this.currentQuest + 1}/${this.quests.length}:</strong> ${quest.task}`;
        } else {
            questEl.innerHTML = `<strong>All quests completed!</strong> 🎉`;
        }
    },

    // Complete the mini game
    complete() {
        this.isRunning = false;
        this.closeDialog();

        const nickname = StorageManager.getNickname() || 'Learner';
        const stars = this.completedQuests.length >= this.quests.length ? 3 : 
                      this.completedQuests.length >= this.quests.length * 0.5 ? 2 : 1;

        // Show completion modal
        const modal = document.getElementById('completion-modal');
        const message = document.getElementById('completion-message');
        const subtitle = document.getElementById('completion-subtitle');

        message.textContent = `Congrats, ${nickname}!`;
        subtitle.textContent = `You completed ${this.completedQuests.length} out of ${this.quests.length} quests!`;

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

        return {
            stars: stars,
            completed: this.completedQuests.length,
            total: this.quests.length
        };
    },

    // Stop the game
    stop() {
        this.isRunning = false;
        this.keys = {};
        this.closeDialog();
    },

    // Reset the game
    reset() {
        this.currentQuest = 0;
        this.completedQuests = [];
        this.dialogActive = false;
        this.currentNPC = null;
        this.player = {
            x: this.canvas.width / 2,
            y: this.canvas.height - 100,
            direction: 'down'
        };
        this.updateQuestDisplay();
        this.isRunning = true;
        this.gameLoop();
    }
};