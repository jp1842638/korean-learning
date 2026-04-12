// ===== Korean Learning Content =====
// 6 Chapters, 10 Stages each
// Includes formal (존댓말) and informal (반말) forms
// Fixed: Answer distribution randomized, romanization added to all questions

const LessonContent = {
    chapters: {
        1: {
            id: 1,
            title: "Hangul Basics & Greetings",
            description: "Learn the Korean alphabet and basic greetings",
            difficulty: "beginner",
            difficultyLabel: "Beginner",
            stages: {
                1: {
                    id: 1,
                    title: "Korean Vowels (모음 Moh-eum)",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "ㅏ",
                            romanization: "ah",
                            meaning: "Vowel 'a' (as in 'father')",
                            audio: null
                        },
                        {
                            
                            korean: "ㅓ",
                            romanization: "uh",
                            meaning: "Vowel 'uh' (as in 'sun')",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅗ",
                            romanization: "oh",
                            meaning: "Vowel 'o' (as in 'go')",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅜ",
                            romanization: "ooh",
                            meaning: "Vowel 'u' (as in 'moon')",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅡ",
                            romanization: "eu",
                            meaning: "Vowel 'eu' (no English equivalent)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅣ",
                            romanization: "i",
                            meaning: "Vowel 'i' (as in 'see')",
                            audio: null
                        },
                        {
                            type: "multiple-choice",
                            question: "Which vowel makes the 'ah' sound?",
                            korean: "ㅏ",
                            romanization: "ah",
                            options: ["ㅓ", "ㅗ", "ㅏ", "ㅜ"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "Which vowel is pronounced 'i'?",
                            korean: "ㅣ",
                            romanization: "i",
                            options: ["ㅣ", "ㅜ", "ㅗ", "ㅡ"],
                            correct: 0
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "Korean Consonants (자음 Jah-eum)",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "ㄱ",
                            romanization: "g/k",
                            meaning: "Consonant 'g' or 'k'",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㄴ",
                            romanization: "n",
                            meaning: "Consonant 'n'",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㄷ",
                            romanization: "d/t",
                            meaning: "Consonant 'd' or sometimes 't'",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㄹ",
                            romanization: "r/l",
                            meaning: "Consonant 'r' or 'l'",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅁ",
                            romanization: "m",
                            meaning: "Consonant 'm'",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅂ",
                            romanization: "b/p",
                            meaning: "Consonant 'b' or 'p'",
                            audio: null
                        },
                        {
                            type: "multiple-choice",
                            question: "Which consonant sounds like 'n'?",
                            korean: "ㄴ",
                            romanization: "n",
                            options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "Which consonant can sound like 'r' or 'l'?",
                            korean: "ㄹ",
                            romanization: "r/l",
                            options: ["ㅁ", "ㅂ", "ㄴ", "ㄹ"],
                            correct: 3
                        }
                    ]
                },
                3: {
                    id: 3,
                    title: "Hello & Goodbye",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "안녕하세요",
                            romanization: "annyeonghaseyo",
                            meaning: "Hello (formal)",
                            formal: "안녕하세요",
                            informal: "안녕",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "안녕",
                            romanization: "annyeong",
                            meaning: "Hi / Bye (informal)",
                            formal: "안녕하세요 / 안녕히 가세요",
                            informal: "안녕",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "안녕히 가세요",
                            romanization: "annyeonghi gaseyo",
                            meaning: "Goodbye (to someone leaving, formal)",
                            formal: "안녕히 가세요",
                            informal: "잘 가",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "안녕히 계세요",
                            romanization: "annyeonghi gyeseyo",
                            meaning: "Goodbye (to someone staying, formal)",
                            formal: "안녕히 계세요",
                            informal: "잘 있어",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate to English:",
                            korean: "안녕하세요",
                            romanization: "annyeonghaseyo",
                            options: ["Thank you", "Goodbye", "Hello", "Sorry"],
                            correct: 2
                        },
                        {
                            type: "translate",
                            question: "How do you say 'Hello' formally in Korean?",
                            korean: "안녕하세요",
                            romanization: "annyeonghaseyo",
                            options: ["안녕하세요", "안녕", "감사합니다", "잘 가"],
                            correct: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the INFORMAL way to say 'Hi'?",
                            korean: "안녕",
                            romanization: "annyeong",
                            options: ["안녕하세요", "안녕히 가세요", "안녕히 계세요", "안녕"],
                            correct: 3
                        }
                    ]
                },
                4: {
                    id: 4,
                    title: "Thank You & Sorry",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "감사합니다",
                            romanization: "gamsahamnida",
                            meaning: "Thank you (formal)",
                            formal: "감사합니다",
                            informal: "고마워",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "고마워",
                            romanization: "gomawo",
                            meaning: "Thanks (informal)",
                            formal: "감사합니다 / 고맙습니다",
                            informal: "고마워",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "죄송합니다",
                            romanization: "joesonghamnida",
                            meaning: "I'm sorry (formal)",
                            formal: "죄송합니다",
                            informal: "미안해",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "미안해",
                            romanization: "mianhae",
                            meaning: "Sorry (informal)",
                            formal: "죄송합니다 / 미안합니다",
                            informal: "미안해",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate to English:",
                            korean: "감사합니다",
                            romanization: "gamsahamnida",
                            options: ["Hello", "Sorry", "Goodbye", "Thank you"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the INFORMAL way to say 'Sorry'?",
                            korean: "미안해",
                            romanization: "mianhae",
                            options: ["미안해", "죄송합니다", "감사합니다", "고마워"],
                            correct: 0
                        },
                        {
                            type: "translate",
                            question: "How do you say 'Thank you' to a friend?",
                            korean: "고마워",
                            romanization: "gomawo",
                            options: ["감사합니다", "죄송합니다", "미안해", "고마워"],
                            correct: 3
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: Village Greetings",
                    type: "minigame",
                    gameId: "village_greetings",
                    description: "Walk around the village and greet the villagers!",
                    quests: [
                        {
                            id: 1,
                            npc: "grandmother",
                            task: "Greet the grandmother formally",
                            correctAnswer: "안녕하세요",
                            options: ["안녕", "뭐해?", "안녕하세요"]
                        },
                        {
                            id: 2,
                            npc: "friend",
                            task: "Say hi to your friend",
                            correctAnswer: "안녕",
                            options: ["감사합니다", "안녕하세요", "안녕"]
                        },
                        {
                            id: 3,
                            npc: "teacher",
                            task: "Thank the teacher formally",
                            correctAnswer: "감사합니다",
                            options: ["고마워", "감사합니다", "안녕"]
                        }
                    ]
                },
                6: {
                    id: 6,
                    title: "Yes & No",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "네",
                            romanization: "ne",
                            meaning: "Yes (formal)",
                            formal: "네 / 예",
                            informal: "응 / 어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아니요",
                            romanization: "aniyo",
                            meaning: "No (formal)",
                            formal: "아니요",
                            informal: "아니",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "응",
                            romanization: "eung",
                            meaning: "Yeah (informal)",
                            formal: "네",
                            informal: "응",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아니",
                            romanization: "ani",
                            meaning: "No (informal)",
                            formal: "아니요",
                            informal: "아니",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate to English:",
                            korean: "네",
                            romanization: "ne",
                            options: ["No", "Hello", "Yes", "Maybe"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the INFORMAL way to say 'Yes'?",
                            korean: "응",
                            romanization: "eung",
                            options: ["네", "아니요", "아니", "응"],
                            correct: 3
                        }
                    ]
                },
                7: {
                    id: 7,
                    title: "Excuse Me & Please",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "저기요",
                            romanization: "jeogiyo",
                            meaning: "Excuse me (to get attention)",
                            formal: "저기요",
                            informal: "야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "잠시만요",
                            romanization: "jamsimanyo",
                            meaning: "Just a moment, please",
                            formal: "잠시만요",
                            informal: "잠깐만",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "주세요",
                            romanization: "juseyo",
                            meaning: "Please give me (formal)",
                            formal: "주세요",
                            informal: "줘",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "How do you get someone's attention politely?",
                            korean: "저기요",
                            romanization: "jeogiyo",
                            options: ["주세요", "네", "아니요", "저기요"],
                            correct: 3
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Water, please.",
                            sentence: "물 ___",
                            answer: "주세요",
                            options: ["아니요", "네", "주세요", "저기요"]
                        }
                    ]
                },
                8: {
                    id: 8,
                    title: "Basic Questions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "뭐예요?",
                            romanization: "mwoyeyo?",
                            meaning: "What is it? (formal)",
                            formal: "뭐예요?",
                            informal: "뭐야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "어디예요?",
                            romanization: "eodiyeyo?",
                            meaning: "Where is it? (formal)",
                            formal: "어디예요?",
                            informal: "어디야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "누구예요?",
                            romanization: "nuguyeyo?",
                            meaning: "Who is it? (formal)",
                            formal: "누구예요?",
                            informal: "누구야?",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate to English:",
                            korean: "뭐예요?",
                            romanization: "mwoyeyo?",
                            options: ["Where?", "When?", "Who?", "What?"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you ask 'Where?' informally?",
                            korean: "어디야?",
                            romanization: "eodiya?",
                            options: ["어디야?", "어디예요?", "뭐야?", "누구야?"],
                            correct: 0
                        }
                    ]
                },
                9: {
                    id: 9,
                    title: "I am / I'm not",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "저는 ... 이에요/예요",
                            romanization: "jeoneun ... ieyo/yeyo",
                            meaning: "I am ... (formal)",
                            formal: "저는 ... 이에요/예요",
                            informal: "나는 ... 이야/야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저는 학생이에요",
                            romanization: "jeoneun haksaengieyo",
                            meaning: "I am a student (formal)",
                            formal: "저는 학생이에요",
                            informal: "나는 학생이야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아니에요",
                            romanization: "anieyo",
                            meaning: "It's not / I'm not (formal)",
                            formal: "아니에요",
                            informal: "아니야",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I am a teacher. (formal)",
                            sentence: "저는 선생님___",
                            answer: "이에요",
                            options: ["예요", "이에요", "아니에요", "이야"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 저는 학생이에요",
                            korean: "저는 학생이에요",
                            romanization: "jeoneun haksaengieyo",
                            options: ["I am a teacher", "You are a student", "I am a student", "I am not a student"],
                            correct: 2
                        }
                    ]
                },
                10: {
                    id: 10,
                    title: "Chapter 1 Review",
                    type: "lesson",
                    content: [
                        {
                            type: "translate",
                            question: "How do you say 'Hello' formally?",
                            korean: "안녕하세요",
                            romanization: "annyeonghaseyo",
                            options: ["안녕", "고마워", "안녕하세요", "미안해"],
                            correct: 2
                        },
                        {
                            type: "translate",
                            question: "Translate: 감사합니다",
                            korean: "감사합니다",
                            romanization: "gamsahamnida",
                            options: ["Thank you", "Sorry", "Goodbye", "Hello"],
                            correct: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is INFORMAL for 'Sorry'?",
                            korean: "미안해",
                            romanization: "mianhae",
                            options: ["죄송합니다", "감사합니다", "미안해", "안녕하세요"],
                            correct: 2
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Excuse me! (to get attention)",
                            sentence: "___!",
                            answer: "저기요",
                            options: ["주세요", "네", "저기요", "아니요"]
                        },
                        {
                            type: "translate",
                            question: "What does '네' mean?",
                            korean: "네",
                            romanization: "ne",
                            options: ["No", "Where", "What", "Yes"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'What is it?' formally?",
                            korean: "뭐예요?",
                            romanization: "mwoyeyo?",
                            options: ["뭐야?", "누구야?", "뭐예요?", "어디야?"],
                            correct: 2
                        }
                    ]
                }
            }
        },
        2: {
            id: 2,
            title: "Self Introduction & Numbers",
            description: "Introduce yourself and learn Korean numbers",
            difficulty: "elementary",
            difficultyLabel: "Elementary",
            stages: {
                1: {
                    id: 1,
                    title: "My Name Is...",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "이름",
                            romanization: "ireum",
                            meaning: "Name",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "제 이름은 ... 이에요",
                            romanization: "je ireumeun ... ieyo",
                            meaning: "My name is ... (formal)",
                            formal: "제 이름은 ... 이에요/예요",
                            informal: "내 이름은 ... 이야/야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저는 ... 이라고 해요",
                            romanization: "jeoneun ... irago haeyo",
                            meaning: "I'm called ... (formal)",
                            formal: "저는 ... 이라고 해요",
                            informal: "나는 ... 이라고 해",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "만나서 반갑습니다",
                            romanization: "mannaseo bangapseumnida",
                            meaning: "Nice to meet you (formal)",
                            formal: "만나서 반갑습니다",
                            informal: "만나서 반가워",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: My name is John. (formal)",
                            sentence: "제 이름은 John___",
                            answer: "이에요",
                            options: ["이야", "예요", "이에요", "야"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 만나서 반갑습니다",
                            korean: "만나서 반갑습니다",
                            romanization: "mannaseo bangapseumnida",
                            options: ["Goodbye", "Thank you", "Nice to meet you", "What's your name?"],
                            correct: 2
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "Where Are You From?",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "어디에서 왔어요?",
                            romanization: "eodieseo watseoyo?",
                            meaning: "Where are you from? (formal)",
                            formal: "어디에서 왔어요?",
                            informal: "어디에서 왔어?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저는 ... 에서 왔어요",
                            romanization: "jeoneun ... eseo watseoyo",
                            meaning: "I'm from ... (formal)",
                            formal: "저는 ... 에서 왔어요",
                            informal: "나는 ... 에서 왔어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "캐나다",
                            romanization: "Kaenada",
                            meaning: "Canada",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "한국",
                            romanization: "hanguk",
                            meaning: "Korea",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "일본",
                            romanization: "ilbon",
                            meaning: "Japan",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "중국",
                            romanization: "jungguk",
                            meaning: "China",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I'm from USA. (formal)",
                            sentence: "저는 캐나다___ 왔어요",
                            answer: "에서",
                            options: ["에", "을", "는", "에서"]
                        },
                        {
                            type: "translate",
                            question: "What does '한국' mean?",
                            korean: "한국",
                            romanization: "hanguk",
                            options: ["Japan", "China", "Canada", "Korea"],
                            correct: 3
                        }
                    ]
                },
                3: {
                    id: 3,
                    title: "Numbers 1-10 (Sino-Korean)",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "일",
                            romanization: "il",
                            meaning: "1 (one)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "이",
                            romanization: "i",
                            meaning: "2 (two)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "삼",
                            romanization: "sahm",
                            meaning: "3 (three)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "사",
                            romanization: "sa",
                            meaning: "4 (four)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "오",
                            romanization: "o",
                            meaning: "5 (five)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "육",
                            romanization: "yuk",
                            meaning: "6 (six)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "칠",
                            romanization: "chill",
                            meaning: "7 (seven)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "팔",
                            romanization: "pal",
                            meaning: "8 (eight)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "구",
                            romanization: "goo",
                            meaning: "9 (nine)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "십",
                            romanization: "sip",
                            meaning: "10 (ten)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "백",
                            romanization: "baek",
                            meaning: "100 (hundred)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "천",
                            romanization: "cheon",
                            meaning: "1,000 (thousand)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "만",
                            romanization: "mahn",
                            meaning: "10,000 (ten thousand)",
                            audio: null
                        },
                        {
                            type: "multiple-choice",
                            question: "What is '삼' in English?",
                            korean: "삼",
                            romanization: "sahm",
                            options: ["1", "3", "2", "4"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say '7' in Korean?",
                            korean: "칠",
                            romanization: "chil",
                            options: ["칠", "육", "팔", "구"],
                            correct: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "What does '천' mean?",
                            korean: "천",
                            romanization: "cheon",
                            options: ["100", "10", "10,000", "1,000"],
                            correct: 3
                        }
                    ]
                },
                4: {
                    id: 4,
                    title: "Numbers 1-10 (Native Korean)",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "하나",
                            romanization: "hana",
                            meaning: "1 (one) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "둘",
                            romanization: "dul",
                            meaning: "2 (two) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "셋",
                            romanization: "set",
                            meaning: "3 (three) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "넷",
                            romanization: "net",
                            meaning: "4 (four) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "다섯",
                            romanization: "daseot",
                            meaning: "5 (five) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "여섯",
                            romanization: "yeoseot",
                            meaning: "6 (six) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "일곱",
                            romanization: "ilgop",
                            meaning: "7 (seven) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "여덟",
                            romanization: "yeodeol",
                            meaning: "8 (eight) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아홉",
                            romanization: "ahop",
                            meaning: "9 (nine) - Native",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "열",
                            romanization: "yeol",
                            meaning: "10 (ten) - Native",
                            audio: null
                        },
                        {
                            type: "multiple-choice",
                            question: "What is '다섯' in English?",
                            korean: "다섯",
                            romanization: "daseot",
                            options: ["3", "4", "6", "5"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say '2' in Native Korean?",
                            korean: "둘",
                            romanization: "dul",
                            options: ["하나", "셋", "넷", "둘"],
                            correct: 3
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: Number Market",
                    type: "minigame",
                    gameId: "number_market",
                    description: "Buy an apple at the market!",
                    quests: [
                        {
                            id: 1,
                            npc: "shopkeeper",
                            task: "Ask for 1 apple in Korean",
                            correctAnswer: "한 개",
                            options: ["세 개", "한 개", "두 개"]
                        },
                        {
                            id: 2,
                            npc: "customer",
                            task: "Tell the customer the price is 1000 won",
                            correctAnswer: "1,000원",
                            options: ["100원", "10,000원", "1,000원"]
                        }
                    ]
                },
                6: {
                    id: 6,
                    title: "Age & Birthday",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "몇 살이에요?",
                            romanization: "myeot sarieyo?",
                            meaning: "How old are you? (formal)",
                            formal: "몇 살이에요?",
                            informal: "몇 살이야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저는 ... 살이에요",
                            romanization: "jeoneun ... sarieyo",
                            meaning: "I am ... years old (formal)",
                            formal: "저는 ... 살이에요",
                            informal: "나는 ... 살이야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "생일",
                            romanization: "saengil",
                            meaning: "Birthday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "생일 축하해요",
                            romanization: "saengil chukahaeyo",
                            meaning: "Happy birthday (formal)",
                            formal: "생일 축하해요",
                            informal: "생일 축하해",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I am 20 years old. (formal)",
                            sentence: "저는 스무 ___이에요",
                            answer: "살",
                            options: ["년", "살", "세", "월"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 생일 축하해요",
                            korean: "생일 축하해요",
                            romanization: "saengil chukahaeyo",
                            options: ["How old are you?", "Happy birthday", "Nice to meet you", "Thank you"],
                            correct: 1
                        }
                    ]
                },
                7: {
                    id: 7,
                    title: "Occupation",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "직업",
                            romanization: "jigeop",
                            meaning: "Job/Occupation",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "학생",
                            romanization: "haksaeng",
                            meaning: "Student",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "선생님",
                            romanization: "seonsaengnim",
                            meaning: "Teacher",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "회사원",
                            romanization: "hoesawon",
                            meaning: "Office worker",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "의사",
                            romanization: "uisa",
                            meaning: "Doctor",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "요리사",
                            romanization: "yorisa",
                            meaning: "Chef/Cook",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '학생' mean?",
                            korean: "학생",
                            romanization: "haksaeng",
                            options: ["Teacher", "Chef", "Student", "Doctor"],
                            correct: 2
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I am a teacher. (formal)",
                            sentence: "저는 ___이에요",
                            answer: "선생님",
                            options: ["학생", "회사원", "의사", "선생님"]
                        }
                    ]
                },
                8: {
                    id: 8,
                    title: "Family Members",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "가족",
                            romanization: "gajok",
                            meaning: "Family",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아버지",
                            romanization: "abeoji",
                            meaning: "Father (formal)",
                            formal: "아버지",
                            informal: "아빠",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "어머니",
                            romanization: "eomeoni",
                            meaning: "Mother (formal)",
                            formal: "어머니",
                            informal: "엄마",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "형/오빠",
                            romanization: "hyeong/oppa",
                            meaning: "Older brother (male/female speaker)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "누나/언니",
                            romanization: "nuna/eonni",
                            meaning: "Older sister (male/female speaker)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "동생",
                            romanization: "dongsaeng",
                            meaning: "Younger sibling",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '엄마' mean?",
                            korean: "엄마",
                            romanization: "eomma",
                            options: ["Father", "Sister", "Brother", "Mother"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "A girl calls her older brother:",
                            korean: "오빠",
                            romanization: "oppa",
                            options: ["형", "누나", "언니", "오빠"],
                            correct: 3
                        }
                    ]
                },
                9: {
                    id: 9,
                    title: "Hobbies",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "취미",
                            romanization: "chwimi",
                            meaning: "Hobby",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "취미가 뭐예요?",
                            romanization: "chwimiga mwoyeyo?",
                            meaning: "What's your hobby? (formal)",
                            formal: "취미가 뭐예요?",
                            informal: "취미가 뭐야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "음악 듣기",
                            romanization: "eumak deutgi",
                            meaning: "Listening to music",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "영화 보기",
                            romanization: "yeonghwa bogi",
                            meaning: "Watching movies",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "운동하기",
                            romanization: "undonghagi",
                            meaning: "Exercising",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "요리하기",
                            romanization: "yorihagi",
                            meaning: "Cooking",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 취미가 뭐예요?",
                            korean: "취미가 뭐예요?",
                            romanization: "chwimiga mwoyeyo?",
                            options: ["What's your name?", "How old are you?", "What's your hobby?", "Where are you from?"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "What does '영화 보기' mean?",
                            korean: "영화 보기",
                            romanization: "yeonghwa bogi",
                            options: ["Watching movies", "Listening to music", "Exercising", "Cooking"],
                            correct: 0
                        }
                    ]
                },
                10: {
                    id: 10,
                    title: "Chapter 2 Review",
                    type: "lesson",
                    content: [
                        {
                            type: "fill-blank",
                            question: "Complete: My name is Sarah. (formal)",
                            sentence: "제 이름은 Sarah___",
                            answer: "예요",
                            options: ["이에요", "야", "이야", "예요"]
                        },
                        {
                            type: "translate",
                            question: "What is '삼' in English?",
                            korean: "삼",
                            romanization: "sam",
                            options: ["1", "4", "3", "2"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say '5' in Native Korean?",
                            korean: "다섯",
                            romanization: "daseot",
                            options: ["다섯", "셋", "넷", "여섯"],
                            correct: 0
                        },
                        {
                            type: "translate",
                            question: "Translate: 만나서 반갑습니다",
                            korean: "만나서 반갑습니다",
                            romanization: "mannaseo bangapseumnida",
                            options: ["Hello", "Goodbye", "Nice to meet you", "Thank you"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "What does '학생' mean?",
                            korean: "학생",
                            romanization: "haksaeng",
                            options: ["Teacher", "Student", "Doctor", "Chef"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I'm from Korea. (formal)",
                            sentence: "저는 한국___ 왔어요",
                            answer: "에서",
                            options: ["에", "을", "에서", "는"]
                        }
                    ]
                }
            }
        },
        3: {
            id: 3,
            title: "Daily Conversations",
            description: "Learn everyday conversations at cafes and restaurants",
            difficulty: "intermediate",
            difficultyLabel: "Intermediate",
            stages: {
                1: {
                    id: 1,
                    title: "At the Cafe - Ordering",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "커피",
                            romanization: "keopi",
                            meaning: "Coffee",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아메리카노",
                            romanization: "amerikano",
                            meaning: "Americano",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "라떼",
                            romanization: "latte",
                            meaning: "Latte",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "주문하시겠어요?",
                            romanization: "jumunhasigesseoyo?",
                            meaning: "Would you like to order?",
                            formal: "주문하시겠어요?",
                            informal: "주문할래?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 주세요",
                            romanization: "... juseyo",
                            meaning: "Please give me ...",
                            formal: "... 주세요",
                            informal: "... 줘",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아이스로 주세요",
                            romanization: "aiseuro juseyo",
                            meaning: "Iced, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "따뜻하게 주세요",
                            romanization: "ttatteuthage juseyo",
                            meaning: "Hot, please",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: One Americano, please.",
                            sentence: "아메리카노 하나 ___",
                            answer: "주세요",
                            options: ["있어요", "없어요", "주세요", "할게요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 아이스로 주세요",
                            korean: "아이스로 주세요",
                            romanization: "aiseuro juseyo",
                            options: ["Hot, please", "Iced, please", "Large, please", "Small, please"],
                            correct: 1
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "At the Cafe - Paying",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "얼마예요?",
                            romanization: "eolmayeyo?",
                            meaning: "How much is it?",
                            formal: "얼마예요?",
                            informal: "얼마야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 원이에요",
                            romanization: "... wonieyo",
                            meaning: "It's ... won",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "카드로 할게요",
                            romanization: "kadeuro halgeyo",
                            meaning: "I'll pay by card",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "현금으로 할게요",
                            romanization: "hyeongeumeuro halgeyo",
                            meaning: "I'll pay by cash",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "영수증 주세요",
                            romanization: "yeongsujeung juseyo",
                            meaning: "Receipt, please",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 얼마예요?",
                            korean: "얼마예요?",
                            romanization: "eolmayeyo?",
                            options: ["What is it?", "Where is it?", "How much is it?", "Who is it?"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I'll pay by card'?",
                            korean: "카드로 할게요",
                            romanization: "kadeuro halgeyo",
                            options: ["현금으로 할게요", "카드로 할게요", "영수증 주세요", "얼마예요?"],
                            correct: 1
                        }
                    ]
                },
                3: {
                    id: 3,
                    title: "At the Restaurant - Seating",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "몇 분이세요?",
                            romanization: "myeot buniseyo?",
                            meaning: "How many people?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "두 명이요",
                            romanization: "du myeongiyo",
                            meaning: "Two people",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "자리 있어요?",
                            romanization: "jari isseoyo?",
                            meaning: "Is there a seat available?",
                            formal: "자리 있어요?",
                            informal: "자리 있어?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "잠시만 기다려 주세요",
                            romanization: "jamsiman gidaryeo juseyo",
                            meaning: "Please wait a moment",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "이쪽으로 오세요",
                            romanization: "ijjogeuro oseyo",
                            meaning: "Please come this way",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Two people, please.",
                            sentence: "두 ___이요",
                            answer: "명",
                            options: ["개", "명", "분", "잔"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 자리 있어요?",
                            korean: "자리 있어요?",
                            romanization: "jari isseoyo?",
                            options: ["How many people?", "Is there a seat?", "Where is it?", "What is it?"],
                            correct: 1
                        }
                    ]
                },
                4: {
                    id: 4,
                    title: "At the Restaurant - Ordering Food",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "메뉴판 주세요",
                            romanization: "menyupan juseyo",
                            meaning: "Menu, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "뭐가 맛있어요?",
                            romanization: "mwoga masisseoyo?",
                            meaning: "What's delicious?",
                            formal: "뭐가 맛있어요?",
                            informal: "뭐가 맛있어?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "이거 주세요",
                            romanization: "igeo juseyo",
                            meaning: "This one, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "김치찌개",
                            romanization: "kimchijjigae",
                            meaning: "Kimchi stew",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "비빔밥",
                            romanization: "bibimbap",
                            meaning: "Bibimbap (mixed rice)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "불고기",
                            romanization: "bulgogi",
                            meaning: "Bulgogi (marinated beef)",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 메뉴판 주세요",
                            korean: "메뉴판 주세요",
                            romanization: "menyupan juseyo",
                            options: ["Water, please", "Menu, please", "Bill, please", "This one, please"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "What is '비빔밥'?",
                            korean: "비빔밥",
                            romanization: "bibimbap",
                            options: ["Kimchi stew", "Marinated beef", "Mixed rice", "Fried rice"],
                            correct: 2
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: Restaurant Adventure",
                    type: "minigame",
                    gameId: "restaurant_adventure",
                    description: "Order food at a Korean restaurant!",
                    quests: [
                        {
                            id: 1,
                            npc: "waiter",
                            task: "Ask for the menu",
                            correctAnswer: "메뉴판 주세요",
                            options: ["계산해 주세요", "메뉴판 주세요", "물 주세요"]
                        },
                        {
                            id: 2,
                            npc: "waiter",
                            task: "Order bibimbap",
                            correctAnswer: "비빔밥 주세요",
                            options: ["불고기 주세요", "비빔밥 주세요", "김치찌개 주세요"]
                        },
                        {
                            id: 3,
                            npc: "waiter",
                            task: "Ask how much it costs",
                            correctAnswer: "얼마예요?",
                            options: ["뭐예요?", "얼마예요?", "어디예요?"]
                        }
                    ]
                },
                6: {
                    id: 6,
                    title: "Describing Taste",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "맛있어요",
                            romanization: "masisseoyo",
                            meaning: "It's delicious",
                            formal: "맛있어요",
                            informal: "맛있어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "맛없어요",
                            romanization: "maseopseoyo",
                            meaning: "It's not tasty",
                            formal: "맛없어요",
                            informal: "맛없어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "매워요",
                            romanization: "maewoyo",
                            meaning: "It's spicy",
                            formal: "매워요",
                            informal: "매워",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "달아요",
                            romanization: "darayo",
                            meaning: "It's sweet",
                            formal: "달아요",
                            informal: "달아",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "짜요",
                            romanization: "jjayo",
                            meaning: "It's salty",
                            formal: "짜요",
                            informal: "짜",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 맛있어요",
                            korean: "맛있어요",
                            romanization: "masisseoyo",
                            options: ["It's spicy", "It's salty", "It's sweet", "It's delicious"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'It's spicy'?",
                            korean: "매워요",
                            romanization: "maewoyo",
                            options: ["맛있어요", "달아요", "매워요", "짜요"],
                            correct: 2
                        }
                    ]
                },
                7: {
                    id: 7,
                    title: "Making Requests",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "물 주세요",
                            romanization: "mul juseyo",
                            meaning: "Water, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "반찬 더 주세요",
                            romanization: "banchan deo juseyo",
                            meaning: "More side dishes, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "덜 맵게 해 주세요",
                            romanization: "deol maepge hae juseyo",
                            meaning: "Less spicy, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "포장해 주세요",
                            romanization: "pojanghae juseyo",
                            meaning: "To go, please / Pack it up, please",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "계산해 주세요",
                            romanization: "gyesanhae juseyo",
                            meaning: "Check, please / Bill, please",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 물 주세요",
                            korean: "물 주세요",
                            romanization: "mul juseyo",
                            options: ["Water, please", "Menu, please", "Bill, please", "More, please"],
                            correct: 0
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Bill, please.",
                            sentence: "___ 주세요",
                            answer: "계산해",
                            options: ["물", "포장해", "반찬", "계산해"]
                        }
                    ]
                },
                8: {
                    id: 8,
                    title: "Time Expressions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "지금",
                            romanization: "jigeum",
                            meaning: "Now",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "오늘",
                            romanization: "oneul",
                            meaning: "Today",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "내일",
                            romanization: "naeil",
                            meaning: "Tomorrow",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "어제",
                            romanization: "eoje",
                            meaning: "Yesterday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아침",
                            romanization: "achim",
                            meaning: "Morning",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "점심",
                            romanization: "jeomsim",
                            meaning: "Lunch / Noon",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저녁",
                            romanization: "jeonyeok",
                            meaning: "Evening / Dinner",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '내일' mean?",
                            korean: "내일",
                            romanization: "naeil",
                            options: ["Yesterday", "Today", "Tomorrow", "Now"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'morning' in Korean?",
                            korean: "아침",
                            romanization: "achim",
                            options: ["저녁", "점심", "오늘", "아침"],
                            correct: 3
                        }
                    ]
                },
                9: {
                    id: 9,
                    title: "Days of the Week",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "월요일",
                            romanization: "woryoil",
                            meaning: "Monday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "화요일",
                            romanization: "hwayoil",
                            meaning: "Tuesday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "수요일",
                            romanization: "suyoil",
                            meaning: "Wednesday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "목요일",
                            romanization: "mogyoil",
                            meaning: "Thursday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "금요일",
                            romanization: "geumyoil",
                            meaning: "Friday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "토요일",
                            romanization: "toyoil",
                            meaning: "Saturday",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "일요일",
                            romanization: "iryoil",
                            meaning: "Sunday",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What day is '금요일'?",
                            korean: "금요일",
                            romanization: "geumyoil",
                            options: ["Monday", "Wednesday", "Sunday", "Friday"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'Saturday' in Korean?",
                            korean: "토요일",
                            romanization: "toyoil",
                            options: ["토요일", "일요일", "금요일", "목요일"],
                            correct: 0
                        }
                    ]
                },
                10: {
                    id: 10,
                    title: "Chapter 3 Review",
                    type: "lesson",
                    content: [
                        {
                            type: "fill-blank",
                            question: "Complete: One Americano, please.",
                            sentence: "아메리카노 하나 ___",
                            answer: "주세요",
                            options: ["할게요", "주세요", "있어요", "없어요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 얼마예요?",
                            korean: "얼마예요?",
                            romanization: "eolmayeyo?",
                            options: ["How much is it?", "What is it?", "Where is it?", "Who is it?"],
                            correct: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'It's delicious'?",
                            korean: "맛있어요",
                            romanization: "masisseoyo",
                            options: ["매워요", "짜요", "맛있어요", "달아요"],
                            correct: 2
                        },
                        {
                            type: "translate",
                            question: "What does '내일' mean?",
                            korean: "내일",
                            romanization: "naeil",
                            options: ["Yesterday", "Today", "Now", "Tomorrow"],
                            correct: 3
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Bill, please.",
                            sentence: "___ 주세요",
                            answer: "계산해",
                            options: ["메뉴판", "물", "포장해", "계산해"]
                        },
                        {
                            type: "multiple-choice",
                            question: "What day is '월요일'?",
                            korean: "월요일",
                            romanization: "woryoil",
                            options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
                            correct: 1
                        }
                    ]
                }
            }
        },
        4: {
            id: 4,
            title: "Shopping & Directions",
            description: "Navigate shops and ask for directions",
            difficulty: "upper-intermediate",
            difficultyLabel: "Upper Intermediate",
            stages: {
                1: {
                    id: 1,
                    title: "At the Store - Basics",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "이거 얼마예요?",
                            romanization: "igeo eolmayeyo?",
                            meaning: "How much is this?",
                            formal: "이거 얼마예요?",
                            informal: "이거 얼마야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "너무 비싸요",
                            romanization: "neomu bissayo",
                            meaning: "It's too expensive",
                            formal: "너무 비싸요",
                            informal: "너무 비싸",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "싸요",
                            romanization: "ssayo",
                            meaning: "It's cheap",
                            formal: "싸요",
                            informal: "싸",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "깎아 주세요",
                            romanization: "kkakka juseyo",
                            meaning: "Please give me a discount",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "살게요",
                            romanization: "salgeyo",
                            meaning: "I'll buy it",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 너무 비싸요",
                            korean: "너무 비싸요",
                            romanization: "neomu bissayo",
                            options: ["It's cheap", "It's too expensive", "I'll buy it", "Give me a discount"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Please give me a discount.",
                            sentence: "___ 주세요",
                            answer: "깎아",
                            options: ["줘", "사", "깎아", "봐"]
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "Clothing Shopping",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "옷",
                            romanization: "ot",
                            meaning: "Clothes",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "입어 봐도 돼요?",
                            romanization: "ibeo bwado dwaeyo?",
                            meaning: "Can I try it on?",
                            formal: "입어 봐도 돼요?",
                            informal: "입어 봐도 돼?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "다른 색 있어요?",
                            romanization: "dareun saek isseoyo?",
                            meaning: "Do you have another color?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "더 큰 거 있어요?",
                            romanization: "deo keun geo isseoyo?",
                            meaning: "Do you have a bigger one?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "더 작은 거 있어요?",
                            romanization: "deo jageun geo isseoyo?",
                            meaning: "Do you have a smaller one?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "잘 맞아요",
                            romanization: "jal majayo",
                            meaning: "It fits well",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 입어 봐도 돼요?",
                            korean: "입어 봐도 돼요?",
                            romanization: "ibeo bwado dwaeyo?",
                            options: ["How much is it?", "It fits well", "Can I try it on?", "Do you have another color?"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you ask for a bigger size?",
                            korean: "더 큰 거 있어요?",
                            romanization: "deo keun geo isseoyo?",
                            options: ["더 작은 거 있어요?", "잘 맞아요", "더 큰 거 있어요?", "다른 색 있어요?"],
                            correct: 2
                        }
                    ]
                },
                3: {
                    id: 3,
                    title: "Colors",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "빨간색",
                            romanization: "ppalgansaek",
                            meaning: "Red",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "파란색",
                            romanization: "paransaek",
                            meaning: "Blue",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "노란색",
                            romanization: "noransaek",
                            meaning: "Yellow",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "초록색",
                            romanization: "choroksaek",
                            meaning: "Green",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "검은색",
                            romanization: "geomeunsaek",
                            meaning: "Black",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "흰색",
                            romanization: "huinsaek",
                            meaning: "White",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What color is '파란색'?",
                            korean: "파란색",
                            romanization: "paransaek",
                            options: ["Red", "Green", "Blue", "Yellow"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'black' in Korean?",
                            korean: "검은색",
                            romanization: "geomeunsaek",
                            options: ["흰색", "노란색", "빨간색", "검은색"],
                            correct: 3
                        }
                    ]
                },
                4: {
                    id: 4,
                    title: "Asking for Directions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "... 어디예요?",
                            romanization: "... eodiyeyo?",
                            meaning: "Where is ...?",
                            formal: "... 어디예요?",
                            informal: "... 어디야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 어떻게 가요?",
                            romanization: "... eotteoke gayo?",
                            meaning: "How do I get to ...?",
                            formal: "... 어떻게 가요?",
                            informal: "... 어떻게 가?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "지하철역",
                            romanization: "jihacheol-yeok",
                            meaning: "Subway station",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "버스 정류장",
                            romanization: "beoseu jeongnyujang",
                            meaning: "Bus stop",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "화장실",
                            romanization: "hwajangsil",
                            meaning: "Bathroom/Restroom",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Where is the subway station?",
                            sentence: "지하철역 ___?",
                            answer: "어디예요",
                            options: ["얼마예요", "뭐예요", "어디예요", "누구예요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 화장실 어디예요?",
                            korean: "화장실 어디예요?",
                            romanization: "hwajangsil eodiyeyo?",
                            options: ["Where is the bus stop?", "How much is it?", "Where is the station?", "Where is the bathroom?"],
                            correct: 3
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: Shopping Street",
                    type: "minigame",
                    gameId: "shopping_street",
                    description: "Navigate the shopping street and make purchases!",
                    quests: [
                        {
                            id: 1,
                            npc: "shopkeeper",
                            task: "Ask how much the item costs",
                            correctAnswer: "이거 얼마예요?",
                            options: ["이거 주세요", "이거 얼마예요?", "이거 뭐예요?"]
                        },
                        {
                            id: 2,
                            npc: "shopkeeper",
                            task: "Ask for a discount",
                            correctAnswer: "깎아 주세요",
                            options: ["살게요", "비싸요", "깎아 주세요"]
                        },
                        {
                            id: 3,
                            npc: "stranger",
                            task: "Ask where the subway station is",
                            correctAnswer: "지하철역 어디예요?",
                            options: ["버스 정류장 어디예요?", "화장실 어디예요?", "지하철역 어디예요?"]
                        }
                    ]
                },
                6: {
                    id: 6,
                    title: "Direction Words",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "직진하세요",
                            romanization: "jikjinhaseyo",
                            meaning: "Go straight",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "왼쪽으로 가세요",
                            romanization: "oenjjogeuro gaseyo",
                            meaning: "Go left",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "오른쪽으로 가세요",
                            romanization: "oreunjjogeuro gaseyo",
                            meaning: "Go right",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "여기",
                            romanization: "yeogi",
                            meaning: "Here",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저기",
                            romanization: "jeogi",
                            meaning: "There (far)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "거기",
                            romanization: "geogi",
                            meaning: "There (near listener)",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 직진하세요",
                            korean: "직진하세요",
                            romanization: "jikjinhaseyo",
                            options: ["Go left", "Stop", "Go straight", "Go right"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'Go left'?",
                            korean: "왼쪽으로 가세요",
                            romanization: "oenjjogeuro gaseyo",
                            options: ["오른쪽으로 가세요", "왼쪽으로 가세요", "직진하세요", "여기예요"],
                            correct: 1
                        }
                    ]
                },
                7: {
                    id: 7,
                    title: "Location Words",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "앞",
                            romanization: "ahp",
                            meaning: "Front",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "뒤",
                            romanization: "dwi",
                            meaning: "Back/Behind",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "옆",
                            romanization: "yeop",
                            meaning: "Side/Next to",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "위",
                            romanization: "wi",
                            meaning: "Above/On top",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아래",
                            romanization: "arae",
                            meaning: "Below/Under",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "안",
                            romanization: "ahn",
                            meaning: "Inside",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "밖",
                            romanization: "bahk",
                            meaning: "Outside",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '앞' mean?",
                            korean: "앞",
                            romanization: "ahp",
                            options: ["Back", "Inside", "Side", "Front"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'inside' in Korean?",
                            korean: "안",
                            romanization: "an",
                            options: ["밖", "안", "위", "아래"],
                            correct: 1
                        }
                    ]
                },
                8: {
                    id: 8,
                    title: "Transportation",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "버스",
                            romanization: "beoseu",
                            meaning: "Bus",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "지하철",
                            romanization: "jihacheol",
                            meaning: "Subway",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "택시",
                            romanization: "taeksi",
                            meaning: "Taxi",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "기차",
                            romanization: "gicha",
                            meaning: "Train",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "비행기",
                            romanization: "bihaenggi",
                            meaning: "Airplane",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 타세요",
                            romanization: "... taseyo",
                            meaning: "Take the ... (transportation)",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Take the bus.",
                            sentence: "버스 ___",
                            answer: "타세요",
                            options: ["가세요", "오세요", "타세요", "하세요"]
                        },
                        {
                            type: "translate",
                            question: "What does '지하철' mean?",
                            korean: "지하철",
                            romanization: "jihacheol",
                            options: ["Bus", "Train", "Taxi", "Subway"],
                            correct: 3
                        }
                    ]
                },
                9: {
                    id: 9,
                    title: "Distance & Time",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "가까워요",
                            romanization: "gakkawoyo",
                            meaning: "It's close/near",
                            formal: "가까워요",
                            informal: "가까워",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "멀어요",
                            romanization: "meoreoyo",
                            meaning: "It's far",
                            formal: "멀어요",
                            informal: "멀어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "얼마나 걸려요?",
                            romanization: "eolmana geollyeoyo?",
                            meaning: "How long does it take?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 분 걸려요",
                            romanization: "... bun geollyeoyo",
                            meaning: "It takes ... minutes",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "걸어서",
                            romanization: "georeoseo",
                            meaning: "On foot / Walking",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 얼마나 걸려요?",
                            korean: "얼마나 걸려요?",
                            romanization: "eolmana geollyeoyo?",
                            options: ["How much is it?", "How long does it take?", "Where is it?", "What is it?"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: It takes 10 minutes.",
                            sentence: "십 분 ___",
                            answer: "걸려요",
                            options: ["가요", "걸려요", "있어요", "와요"]
                        }
                    ]
                },
                10: {
                    id: 10,
                    title: "Chapter 4 Review",
                    type: "lesson",
                    content: [
                        {
                            type: "translate",
                            question: "Translate: 너무 비싸요",
                            korean: "너무 비싸요",
                            romanization: "neomu bissayo",
                            options: ["It's cheap", "I'll buy it", "Give me a discount", "It's too expensive"],
                            correct: 3
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Can I try it on?",
                            sentence: "입어 ___ 돼요?",
                            answer: "봐도",
                            options: ["가도", "봐도", "해도", "와도"]
                        },
                        {
                            type: "multiple-choice",
                            question: "What color is '초록색'?",
                            korean: "초록색",
                            romanization: "choroksaek",
                            options: ["Red", "Green", "Blue", "Yellow"],
                            correct: 1
                        },
                        {
                            type: "translate",
                            question: "Translate: 직진하세요",
                            korean: "직진하세요",
                            romanization: "jikjinhaseyo",
                            options: ["Go straight", "Go left", "Stop", "Go right"],
                            correct: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'subway' in Korean?",
                            korean: "지하철",
                            romanization: "jihacheol",
                            options: ["버스", "기차", "택시", "지하철"],
                            correct: 3
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: How long does it take?",
                            sentence: "얼마나 ___?",
                            answer: "걸려요",
                            options: ["가요", "해요", "있어요", "걸려요"]
                        }
                    ]
                }
            }
        },
        5: {
            id: 5,
            title: "Emotions & Opinions",
            description: "Express feelings and share your thoughts",
            difficulty: "advanced",
            difficultyLabel: "Advanced",
            stages: {
                1: {
                    id: 1,
                    title: "Basic Emotions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "기뻐요",
                            romanization: "gippeoyo",
                            meaning: "I'm happy",
                            formal: "기뻐요",
                            informal: "기뻐",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "슬퍼요",
                            romanization: "seulpeoyo",
                            meaning: "I'm sad",
                            formal: "슬퍼요",
                            informal: "슬퍼",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "화나요",
                            romanization: "hwanayo",
                            meaning: "I'm angry",
                            formal: "화나요",
                            informal: "화나",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "무서워요",
                            romanization: "museowoyo",
                            meaning: "I'm scared",
                            formal: "무서워요",
                            informal: "무서워",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "피곤해요",
                            romanization: "pigonhaeyo",
                            meaning: "I'm tired",
                            formal: "피곤해요",
                            informal: "피곤해",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 기뻐요",
                            korean: "기뻐요",
                            romanization: "gippeoyo",
                            options: ["I'm sad", "I'm tired", "I'm happy", "I'm angry"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I'm tired' in Korean?",
                            korean: "피곤해요",
                            romanization: "pigonhaeyo",
                            options: ["슬퍼요", "무서워요", "화나요", "피곤해요"],
                            correct: 3
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "More Emotions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "걱정돼요",
                            romanization: "geokjeongdwaeyo",
                            meaning: "I'm worried",
                            formal: "걱정돼요",
                            informal: "걱정돼",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "신나요",
                            romanization: "sinnayo",
                            meaning: "I'm excited",
                            formal: "신나요",
                            informal: "신나",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "심심해요",
                            romanization: "simsimhaeyo",
                            meaning: "I'm bored",
                            formal: "심심해요",
                            informal: "심심해",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "놀랐어요",
                            romanization: "nollasseoyo",
                            meaning: "I was surprised",
                            formal: "놀랐어요",
                            informal: "놀랐어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "부끄러워요",
                            romanization: "bukkeureowoyo",
                            meaning: "I'm embarrassed/shy",
                            formal: "부끄러워요",
                            informal: "부끄러워",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 심심해요",
                            korean: "심심해요",
                            romanization: "simsimhaeyo",
                            options: ["I'm excited", "I'm bored", "I'm worried", "I'm surprised"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I'm excited' in Korean?",
                            korean: "신나요",
                            romanization: "sinnayo",
                            options: ["신나요", "걱정돼요", "심심해요", "놀랐어요"],
                            correct: 0
                        }
                    ]
                },
                3: {
                    id: 3,
                    title: "Asking How Someone Feels",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "기분이 어때요?",
                            romanization: "gibuni eottaeyo?",
                            meaning: "How do you feel?",
                            formal: "기분이 어때요?",
                            informal: "기분이 어때?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "괜찮아요?",
                            romanization: "gwaenchanayo?",
                            meaning: "Are you okay?",
                            formal: "괜찮아요?",
                            informal: "괜찮아?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "무슨 일 있어요?",
                            romanization: "museun il isseoyo?",
                            meaning: "Is something wrong?",
                            formal: "무슨 일 있어요?",
                            informal: "무슨 일 있어?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "왜 그래요?",
                            romanization: "wae geuraeyo?",
                            meaning: "What's wrong? / Why?",
                            formal: "왜 그래요?",
                            informal: "왜 그래?",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 괜찮아요?",
                            korean: "괜찮아요?",
                            romanization: "gwaenchanayo?",
                            options: ["How do you feel?", "Is something wrong?", "Are you okay?", "What's wrong?"],
                            correct: 2
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: How do you feel?",
                            sentence: "기분이 ___?",
                            answer: "어때요",
                            options: ["뭐예요", "있어요", "어때요", "없어요"]
                        }
                    ]
                },
                4: {
                    id: 4,
                    title: "Expressing Opinions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "좋은 것 같아요",
                            romanization: "joeun geot gatayo",
                            meaning: "I think it's good",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "최고예요",
                            romanization: "choegoyeyo",
                            meaning: "It's the best",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 좋은 것 같아요",
                            korean: "좋은 것 같아요",
                            romanization: "joeun geot gatayo",
                            options: ["It's bad", "It's the best", "I think it's good", "It's not great"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'It's the best'?",
                            korean: "최고예요",
                            romanization: "choegoyeyo",
                            options: ["별로예요", "좋아요", "최고예요", "싫어요"],
                            correct: 2
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: Emotion Park",
                    type: "minigame",
                    gameId: "emotion_park",
                    description: "Help people in the park by understanding their emotions!",
                    quests: [
                        {
                            id: 1,
                            npc: "sad_person",
                            task: "Ask if they're okay",
                            correctAnswer: "괜찮아요?",
                            options: ["안녕하세요?", "뭐예요?", "괜찮아요?"]
                        },
                        {
                            id: 2,
                            npc: "excited_friend",
                            task: "Say you're also excited",
                            correctAnswer: "나도 신나!",
                            options: ["나도 슬퍼!", "나도 피곤해!", "나도 신나!"]
                        },
                        {
                            id: 3,
                            npc: "worried_person",
                            task: "Ask what's wrong",
                            correctAnswer: "무슨 일 있어요?",
                            options: ["어디 가요?", "무슨 일 있어요?", "뭐 먹어요?"]
                        }
                    ]
                },
                6: {
                    id: 6,
                    title: "Agreeing & Disagreeing",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "맞아요",
                            romanization: "majayo",
                            meaning: "That's right",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아닌 것 같아요",
                            romanization: "anin geot gatayo",
                            meaning: "I don't think so",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 맞아요",
                            korean: "맞아요",
                            romanization: "majayo",
                            options: ["That's wrong", "I don't know", "That's right", "Maybe"],
                            correct: 2
                        }
                    ]
                },
                7: {
                    id: 7,
                    title: "Likes & Dislikes",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "좋아해요",
                            romanization: "joahaeyo",
                            meaning: "I like (it)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "싫어해요",
                            romanization: "sireohaeyo",
                            meaning: "I dislike (it)",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I like coffee.",
                            sentence: "커피 ___",
                            answer: "좋아해요",
                            options: ["싫어해요", "있어요", "좋아해요", "없어요"]
                        }
                    ]
                },
                8: {
                    id: 8,
                    title: "Giving Reasons",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "그래서",
                            romanization: "geuraeseo",
                            meaning: "So / Therefore",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "그런데",
                            romanization: "geureonde",
                            meaning: "But / However",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 그래서",
                            korean: "그래서",
                            romanization: "geuraeseo",
                            options: ["Because", "But", "And", "So/Therefore"],
                            correct: 3
                        }
                    ]
                },
                9: {
                    id: 9,
                    title: "Making Suggestions",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "같이 가요",
                            romanization: "gachi gayo",
                            meaning: "Let's go together",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 같이 가요",
                            korean: "같이 가요",
                            romanization: "gachi gayo",
                            options: ["Go alone", "Don't go", "Let's go together", "Where are you going?"],
                            correct: 2
                        }
                    ]
                },
                10: {
                    id: 10,
                    title: "Chapter 5 Review",
                    type: "lesson",
                    content: [
                        {
                            type: "translate",
                            question: "Translate: 기뻐요",
                            korean: "기뻐요",
                            romanization: "gippeoyo",
                            options: ["I'm sad", "I'm tired", "I'm angry", "I'm happy"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you ask 'Are you okay?'",
                            korean: "괜찮아요?",
                            romanization: "gwaenchanayo?",
                            options: ["뭐예요?", "괜찮아요?", "어디예요?", "누구예요?"],
                            correct: 1
                        },
                        {
                            type: "translate",
                            question: "Translate: 맞아요",
                            korean: "맞아요",
                            romanization: "majayo",
                            options: ["That's wrong", "That's right", "Maybe", "I don't know"],
                            correct: 1
                        }
                    ]
                }
            }
        },
        6: {
            id: 6,
            title: "Advanced Conversations",
            description: "Master complex conversations and formal situations",
            difficulty: "fluent",
            difficultyLabel: "Fluent",
            stages: {
                1: {
                    id: 1,
                    title: "Making Appointments",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "시간 있어요?",
                            romanization: "sigan isseoyo?",
                            meaning: "Do you have time?",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 시간 있어요?",
                            korean: "시간 있어요?",
                            romanization: "sigan isseoyo?",
                            options: ["What time is it?", "When is it?", "Do you have time?", "Where is it?"],
                            correct: 2
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "Phone Conversations",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "여보세요",
                            romanization: "yeoboseyo",
                            meaning: "Hello (on phone)",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 여보세요",
                            korean: "여보세요",
                            romanization: "yeoboseyo",
                            options: ["Goodbye", "Thank you", "Hello (on phone)", "Sorry"],
                            correct: 2
                        }
                    ]
                },
                3: {
                    id: 3,
                    title: "At the Hospital",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "머리가 아파요",
                            romanization: "meoriga apayo",
                            meaning: "I have a headache",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 머리가 아파요",
                            korean: "머리가 아파요",
                            romanization: "meoriga apayo",
                            options: ["I have a stomachache", "I caught a cold", "I have a headache", "I'm tired"],
                            correct: 2
                        }
                    ]
                },
                4: {
                    id: 4,
                    title: "At the Bank",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "환전하고 싶어요",
                            romanization: "hwanjeonhago sipeoyo",
                            meaning: "I want to exchange money",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 환전하고 싶어요",
                            korean: "환전하고 싶어요",
                            romanization: "hwanjeonhago sipeoyo",
                            options: ["I want to open an account", "I want to exchange money", "I want to send money", "I want to withdraw money"],
                            correct: 1
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: City Life",
                    type: "minigame",
                    gameId: "city_life",
                    description: "Navigate various situations in the city!",
                    quests: [
                        {
                            id: 1,
                            npc: "receptionist",
                            task: "Make an appointment",
                            correctAnswer: "예약하고 싶어요",
                            options: ["취소하고 싶어요", "예약하고 싶어요", "변경하고 싶어요"]
                        },
                        {
                            id: 2,
                            npc: "doctor",
                            task: "Tell the doctor you have a headache",
                            correctAnswer: "머리가 아파요",
                            options: ["배가 아파요", "다리가 아파요", "머리가 아파요"]
                        },
                        {
                            id: 3,
                            npc: "bank_teller",
                            task: "Say you want to exchange money",
                            correctAnswer: "환전하고 싶어요",
                            options: ["계좌를 만들고 싶어요", "환전하고 싶어요", "돈을 보내고 싶어요"]
                        }
                    ]
                },
                6: {
                    id: 6,
                    title: "Formal Speech",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "알겠습니다",
                            romanization: "algesseumnida",
                            meaning: "I understand (very formal)",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 알겠습니다",
                            korean: "알겠습니다",
                            romanization: "algesseumnida",
                            options: ["I don't know", "I understand", "I'm sorry", "Thank you"],
                            correct: 1
                        }
                    ]
                },
                7: {
                    id: 7,
                    title: "Business Korean",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "회의",
                            romanization: "hoeui",
                            meaning: "Meeting",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '회의' mean?",
                            korean: "회의",
                            romanization: "hoeui",
                            options: ["Report", "Meeting", "Deadline", "Business trip"],
                            correct: 1
                        }
                    ]
                },
                8: {
                    id: 8,
                    title: "Expressing Wishes",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "한국에 가고 싶어요",
                            romanization: "hanguge gago sipeoyo",
                            meaning: "I want to go to Korea",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 한국에 가고 싶어요",
                            korean: "한국에 가고 싶어요",
                            romanization: "hanguge gago sipeoyo",
                            options: ["I went to Korea", "I want to go to Korea", "I'm going to Korea", "I came from Korea"],
                            correct: 1
                        }
                    ]
                },
                9: {
                    id: 9,
                    title: "Talking About Plans",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "내일 뭐 할 거예요?",
                            romanization: "naeil mwo hal geoyeyo?",
                            meaning: "What are you going to do tomorrow?",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 내일 뭐 할 거예요?",
                            korean: "내일 뭐 할 거예요?",
                            romanization: "naeil mwo hal geoyeyo?",
                            options: ["What did you do yesterday?", "What are you doing now?", "What are you going to do tomorrow?", "What do you want to do?"],
                            correct: 2
                        }
                    ]
                },
                10: {
                    id: 10,
                    title: "Final Review",
                    type: "lesson",
                    content: [
                        {
                            type: "translate",
                            question: "Translate: 시간 있어요?",
                            korean: "시간 있어요?",
                            romanization: "sigan isseoyo?",
                            options: ["What time is it?", "Do you have time?", "When is it?", "Where is it?"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'Hello' on the phone?",
                            korean: "여보세요",
                            romanization: "yeoboseyo",
                            options: ["안녕하세요", "감사합니다", "여보세요", "죄송합니다"],
                            correct: 2
                        },
                        {
                            type: "translate",
                            question: "Translate: 알겠습니다",
                            korean: "알겠습니다",
                            romanization: "algesseumnida",
                            options: ["I don't know", "I'm sorry", "Thank you", "I understand"],
                            correct: 3
                        }
                    ]
                }
            }
        }
    },

    // Mini game configurations
    minigames: {
        village_greetings: {
            id: "village_greetings",
            title: "Village Greetings",
            mapType: "village",
            npcs: [
                { id: "grandmother", name: "Grandmother", sprite: "grandmother", x: 200, y: 150, dialog: "Oh, a young visitor!" },
                { id: "friend", name: "Friend", sprite: "friend", x: 400, y: 300, dialog: "Hey! Over here!" },
                { id: "teacher", name: "Teacher", sprite: "teacher", x: 600, y: 200, dialog: "Good to see you studying!" }
            ]
        },
        number_market: {
            id: "number_market",
            title: "Number Market",
            mapType: "market",
            npcs: [
                { id: "shopkeeper", name: "Shopkeeper", sprite: "shopkeeper", x: 300, y: 200, dialog: "Welcome! Apples? How many apples?" },
                { id: "customer", name: "Customer", sprite: "customer", x: 500, y: 350, dialog: "Excuse me, how much is one apple?" }
            ]
        },
        restaurant_adventure: {
            id: "restaurant_adventure",
            title: "Restaurant Adventure",
            mapType: "restaurant",
            npcs: [
                { id: "waiter", name: "Waiter", sprite: "waiter", x: 400, y: 150, dialog: ["Welcome! Table for one?", "Here is the menu! What would you like?", "Here is bibimbap!"] }
            ]
        },
        shopping_street: {
            id: "shopping_street",
            title: "Shopping Street",
            mapType: "street",
            npcs: [
                { id: "shopkeeper", name: "Shopkeeper", sprite: "shopkeeper", x: 250, y: 200, dialog: ["How can I help you?", "Oh, this is 10,000 won!"] },
                { id: "stranger", name: "Stranger", sprite: "stranger", x: 550, y: 300, dialog: "Uh... hello." }
            ]
        },
        emotion_park: {
            id: "emotion_park",
            title: "Emotion Park",
            mapType: "park",
            npcs: [
                { id: "sad_person", name: "Sad Person", sprite: "sad", x: 200, y: 250, dialog: "*sigh*..." },
                { id: "excited_friend", name: "Excited Friend", sprite: "excited", x: 450, y: 150, dialog: "This is amazing!" },
                { id: "worried_person", name: "Worried Person", sprite: "worried", x: 600, y: 350, dialog: "Oh no..." }
            ]
        },
        city_life: {
            id: "city_life",
            title: "City Life",
            mapType: "city",
            npcs: [
                { id: "receptionist", name: "Receptionist", sprite: "receptionist", x: 200, y: 150, dialog: "How can I help you?" },
                { id: "doctor", name: "Doctor", sprite: "doctor", x: 400, y: 250, dialog: "What brings you in today?" },
                { id: "bank_teller", name: "Bank Teller", sprite: "teller", x: 600, y: 200, dialog: "Next, please!" }
            ]
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LessonContent;
}
