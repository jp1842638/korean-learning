// ===== Korean Learning Content =====
// 6 Chapters, 10 Stages each
// Includes formal (존댓말) and informal (반말) forms

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
                    title: "Korean Vowels (모음)",
                    type: "lesson",
                    content: [
                        {
                            type: "word-card",
                            korean: "ㅏ",
                            romanization: "a",
                            meaning: "Vowel 'a' (as in 'father')",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅓ",
                            romanization: "eo",
                            meaning: "Vowel 'eo' (as in 'sun')",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅗ",
                            romanization: "o",
                            meaning: "Vowel 'o' (as in 'go')",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "ㅜ",
                            romanization: "u",
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
                            question: "Which vowel makes the 'a' sound?",
                            korean: null,
                            options: ["ㅏ", "ㅓ", "ㅗ", "ㅜ"],
                            correct: 0
                        },
                        {
                            type: "multiple-choice",
                            question: "Which vowel is pronounced 'i'?",
                            korean: null,
                            options: ["ㅡ", "ㅣ", "ㅜ", "ㅗ"],
                            correct: 1
                        }
                    ]
                },
                2: {
                    id: 2,
                    title: "Korean Consonants (자음)",
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
                            meaning: "Consonant 'd' or 't'",
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
                            korean: null,
                            options: ["ㄱ", "ㄴ", "ㄷ", "ㄹ"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "Which consonant can sound like 'r' or 'l'?",
                            korean: null,
                            options: ["ㅁ", "ㅂ", "ㄹ", "ㄴ"],
                            correct: 2
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
                            options: ["Goodbye", "Hello", "Thank you", "Sorry"],
                            correct: 1
                        },
                        {
                            type: "translate",
                            question: "How do you say 'Hello' formally in Korean?",
                            korean: null,
                            options: ["안녕", "감사합니다", "안녕하세요", "잘 가"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the INFORMAL way to say 'Hi'?",
                            korean: null,
                            options: ["안녕하세요", "안녕", "안녕히 가세요", "안녕히 계세요"],
                            correct: 1
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
                            options: ["Sorry", "Hello", "Thank you", "Goodbye"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the INFORMAL way to say 'Sorry'?",
                            korean: null,
                            options: ["죄송합니다", "미안해", "감사합니다", "고마워"],
                            correct: 1
                        },
                        {
                            type: "translate",
                            question: "How do you say 'Thank you' to a friend?",
                            korean: null,
                            options: ["감사합니다", "죄송합니다", "고마워", "미안해"],
                            correct: 2
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
                            options: ["안녕하세요", "안녕", "뭐해?"]
                        },
                        {
                            id: 2,
                            npc: "friend",
                            task: "Say hi to your friend",
                            correctAnswer: "안녕",
                            options: ["안녕하세요", "안녕", "감사합니다"]
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
                            options: ["No", "Yes", "Maybe", "Hello"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the INFORMAL way to say 'Yes'?",
                            korean: null,
                            options: ["네", "아니요", "응", "아니"],
                            correct: 2
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
                            korean: null,
                            options: ["주세요", "저기요", "아니요", "네"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Water, please.",
                            sentence: "물 ___",
                            answer: "주세요",
                            options: ["주세요", "아니요", "네", "저기요"]
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
                            options: ["Where?", "Who?", "What?", "When?"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you ask 'Where?' informally?",
                            korean: null,
                            options: ["어디예요?", "어디야?", "뭐야?", "누구야?"],
                            correct: 1
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
                            options: ["이에요", "아니에요", "예요", "이야"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 저는 학생이에요",
                            korean: "저는 학생이에요",
                            romanization: "jeoneun haksaengieyo",
                            options: ["I am a teacher", "I am a student", "I am not a student", "You are a student"],
                            correct: 1
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
                            korean: null,
                            options: ["안녕", "안녕하세요", "고마워", "미안해"],
                            correct: 1
                        },
                        {
                            type: "translate",
                            question: "Translate: 감사합니다",
                            korean: "감사합니다",
                            romanization: "gamsahamnida",
                            options: ["Sorry", "Hello", "Goodbye", "Thank you"],
                            correct: 3
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is INFORMAL for 'Sorry'?",
                            korean: null,
                            options: ["죄송합니다", "미안해", "감사합니다", "안녕하세요"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Excuse me! (to get attention)",
                            sentence: "___!",
                            answer: "저기요",
                            options: ["저기요", "주세요", "네", "아니요"]
                        },
                        {
                            type: "translate",
                            question: "What does '네' mean?",
                            korean: "네",
                            romanization: "ne",
                            options: ["No", "Yes", "What", "Where"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'What is it?' formally?",
                            korean: null,
                            options: ["뭐야?", "뭐예요?", "어디야?", "누구야?"],
                            correct: 1
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
                            options: ["이에요", "예요", "이야", "야"]
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
                            romanization: "eodieseo wasseoyo?",
                            meaning: "Where are you from? (formal)",
                            formal: "어디에서 왔어요?",
                            informal: "어디에서 왔어?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저는 ... 에서 왔어요",
                            romanization: "jeoneun ... eseo wasseoyo",
                            meaning: "I'm from ... (formal)",
                            formal: "저는 ... 에서 왔어요",
                            informal: "나는 ... 에서 왔어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "미국",
                            romanization: "miguk",
                            meaning: "USA",
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
                            sentence: "저는 미국___ 왔어요",
                            answer: "에서",
                            options: ["에서", "에", "을", "는"]
                        },
                        {
                            type: "translate",
                            question: "What does '한국' mean?",
                            korean: "한국",
                            romanization: "hanguk",
                            options: ["Japan", "China", "Korea", "USA"],
                            correct: 2
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
                            romanization: "sam",
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
                            romanization: "chil",
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
                            romanization: "gu",
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
                            type: "multiple-choice",
                            question: "What is '삼' in English?",
                            korean: "삼",
                            options: ["1", "2", "3", "4"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say '7' in Korean?",
                            korean: null,
                            options: ["육", "칠", "팔", "구"],
                            correct: 1
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
                            options: ["3", "4", "5", "6"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say '2' in Native Korean?",
                            korean: null,
                            options: ["하나", "둘", "셋", "넷"],
                            correct: 1
                        }
                    ]
                },
                5: {
                    id: 5,
                    title: "Mini Game: Number Market",
                    type: "minigame",
                    gameId: "number_market",
                    description: "Help the shopkeeper count items!",
                    quests: [
                        {
                            id: 1,
                            npc: "shopkeeper",
                            task: "Count 3 apples in Sino-Korean",
                            correctAnswer: "삼",
                            options: ["일", "이", "삼", "사"]
                        },
                        {
                            id: 2,
                            npc: "shopkeeper",
                            task: "Say '5 items' using Native Korean",
                            correctAnswer: "다섯",
                            options: ["셋", "넷", "다섯", "여섯"]
                        },
                        {
                            id: 3,
                            npc: "customer",
                            task: "Tell the customer the price is 10 won",
                            correctAnswer: "십",
                            options: ["팔", "구", "십", "칠"]
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
                            options: ["살", "세", "년", "월"]
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
                            options: ["Teacher", "Student", "Doctor", "Chef"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I am a teacher. (formal)",
                            sentence: "저는 ___이에요",
                            answer: "선생님",
                            options: ["학생", "선생님", "의사", "회사원"]
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
                            options: ["Father", "Mother", "Brother", "Sister"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "A girl calls her older brother:",
                            korean: null,
                            options: ["형", "오빠", "누나", "언니"],
                            correct: 1
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
                            options: ["What's your name?", "What's your hobby?", "Where are you from?", "How old are you?"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "What does '영화 보기' mean?",
                            korean: "영화 보기",
                            options: ["Listening to music", "Watching movies", "Exercising", "Cooking"],
                            correct: 1
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
                            options: ["이에요", "예요", "이야", "야"]
                        },
                        {
                            type: "translate",
                            question: "What is '삼' in English?",
                            korean: "삼",
                            romanization: "sam",
                            options: ["1", "2", "3", "4"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say '5' in Native Korean?",
                            korean: null,
                            options: ["셋", "넷", "다섯", "여섯"],
                            correct: 2
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
                            options: ["Teacher", "Student", "Doctor", "Chef"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I'm from Korea. (formal)",
                            sentence: "저는 한국___ 왔어요",
                            answer: "에서",
                            options: ["에서", "에", "을", "는"]
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
                            options: ["주세요", "있어요", "없어요", "할게요"]
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
                            options: ["What is it?", "How much is it?", "Where is it?", "Who is it?"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I'll pay by card'?",
                            korean: null,
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
                            options: ["명", "분", "개", "잔"]
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
                            options: ["Kimchi stew", "Mixed rice", "Marinated beef", "Fried rice"],
                            correct: 1
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
                            options: ["메뉴판 주세요", "물 주세요", "계산해 주세요"]
                        },
                        {
                            id: 2,
                            npc: "waiter",
                            task: "Order bibimbap",
                            correctAnswer: "비빔밥 주세요",
                            options: ["김치찌개 주세요", "비빔밥 주세요", "불고기 주세요"]
                        },
                        {
                            id: 3,
                            npc: "waiter",
                            task: "Ask how much it costs",
                            correctAnswer: "얼마예요?",
                            options: ["뭐예요?", "어디예요?", "얼마예요?"]
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
                            options: ["It's spicy", "It's delicious", "It's sweet", "It's salty"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'It's spicy'?",
                            korean: null,
                            options: ["달아요", "짜요", "매워요", "맛있어요"],
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
                            options: ["Menu, please", "Water, please", "Bill, please", "More, please"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Bill, please.",
                            sentence: "___ 주세요",
                            answer: "계산해",
                            options: ["계산해", "포장해", "물", "반찬"]
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
                            korean: null,
                            options: ["저녁", "점심", "아침", "오늘"],
                            correct: 2
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
                            options: ["Monday", "Wednesday", "Friday", "Sunday"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'Saturday' in Korean?",
                            korean: null,
                            options: ["일요일", "토요일", "금요일", "목요일"],
                            correct: 1
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
                            options: ["주세요", "있어요", "없어요", "할게요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 얼마예요?",
                            korean: "얼마예요?",
                            romanization: "eolmayeyo?",
                            options: ["What is it?", "How much is it?", "Where is it?", "Who is it?"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'It's delicious'?",
                            korean: null,
                            options: ["매워요", "짜요", "맛있어요", "달아요"],
                            correct: 2
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
                            type: "fill-blank",
                            question: "Complete: Bill, please.",
                            sentence: "___ 주세요",
                            answer: "계산해",
                            options: ["계산해", "포장해", "물", "메뉴판"]
                        },
                        {
                            type: "multiple-choice",
                            question: "What day is '월요일'?",
                            korean: "월요일",
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
                            options: ["깎아", "사", "줘", "봐"]
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
                            options: ["How much is it?", "Can I try it on?", "Do you have another color?", "It fits well"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you ask for a bigger size?",
                            korean: null,
                            options: ["더 작은 거 있어요?", "더 큰 거 있어요?", "다른 색 있어요?", "잘 맞아요"],
                            correct: 1
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
                            options: ["Red", "Blue", "Yellow", "Green"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'black' in Korean?",
                            korean: null,
                            options: ["흰색", "검은색", "빨간색", "노란색"],
                            correct: 1
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
                            options: ["어디예요", "뭐예요", "얼마예요", "누구예요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 화장실 어디예요?",
                            korean: "화장실 어디예요?",
                            romanization: "hwajangsil eodiyeyo?",
                            options: ["Where is the bus stop?", "Where is the bathroom?", "Where is the station?", "How much is it?"],
                            correct: 1
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
                            options: ["이거 얼마예요?", "이거 뭐예요?", "이거 주세요"]
                        },
                        {
                            id: 2,
                            npc: "shopkeeper",
                            task: "Ask for a discount",
                            correctAnswer: "깎아 주세요",
                            options: ["살게요", "깎아 주세요", "비싸요"]
                        },
                        {
                            id: 3,
                            npc: "stranger",
                            task: "Ask where the subway station is",
                            correctAnswer: "지하철역 어디예요?",
                            options: ["지하철역 어디예요?", "버스 정류장 어디예요?", "화장실 어디예요?"]
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
                            options: ["Go left", "Go right", "Go straight", "Stop"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'Go left'?",
                            korean: null,
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
                            romanization: "ap",
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
                            romanization: "an",
                            meaning: "Inside",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "밖",
                            romanization: "bak",
                            meaning: "Outside",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '앞' mean?",
                            korean: "앞",
                            romanization: "ap",
                            options: ["Back", "Front", "Side", "Inside"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'inside' in Korean?",
                            korean: null,
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
                            options: ["타세요", "가세요", "오세요", "하세요"]
                        },
                        {
                            type: "translate",
                            question: "What does '지하철' mean?",
                            korean: "지하철",
                            romanization: "jihacheol",
                            options: ["Bus", "Subway", "Taxi", "Train"],
                            correct: 1
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
                            options: ["걸려요", "있어요", "가요", "와요"]
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
                            options: ["It's cheap", "It's too expensive", "I'll buy it", "Give me a discount"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Can I try it on?",
                            sentence: "입어 ___ 돼요?",
                            answer: "봐도",
                            options: ["봐도", "해도", "가도", "와도"]
                        },
                        {
                            type: "multiple-choice",
                            question: "What color is '초록색'?",
                            korean: "초록색",
                            options: ["Red", "Blue", "Yellow", "Green"],
                            correct: 3
                        },
                        {
                            type: "translate",
                            question: "Translate: 직진하세요",
                            korean: "직진하세요",
                            romanization: "jikjinhaseyo",
                            options: ["Go left", "Go right", "Go straight", "Stop"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'subway' in Korean?",
                            korean: null,
                            options: ["버스", "지하철", "택시", "기차"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: How long does it take?",
                            sentence: "얼마나 ___?",
                            answer: "걸려요",
                            options: ["걸려요", "있어요", "가요", "해요"]
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
                            options: ["I'm sad", "I'm happy", "I'm angry", "I'm tired"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I'm tired' in Korean?",
                            korean: null,
                            options: ["슬퍼요", "화나요", "피곤해요", "무서워요"],
                            correct: 2
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
                            korean: null,
                            options: ["걱정돼요", "신나요", "심심해요", "놀랐어요"],
                            correct: 1
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
                            options: ["How do you feel?", "Are you okay?", "What's wrong?", "Is something wrong?"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: How do you feel?",
                            sentence: "기분이 ___?",
                            answer: "어때요",
                            options: ["어때요", "뭐예요", "있어요", "없어요"]
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
                            korean: "... 것 같아요",
                            romanization: "... geot gatayo",
                            meaning: "I think ... / It seems ...",
                            formal: "... 것 같아요",
                            informal: "... 것 같아",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "제 생각에는",
                            romanization: "je saenggageneun",
                            meaning: "In my opinion",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "좋은 것 같아요",
                            romanization: "joeun geot gatayo",
                            meaning: "I think it's good",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "별로예요",
                            romanization: "byeolloyeyo",
                            meaning: "It's not that great",
                            formal: "별로예요",
                            informal: "별로야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "최고예요",
                            romanization: "choegoyeyo",
                            meaning: "It's the best",
                            formal: "최고예요",
                            informal: "최고야",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 좋은 것 같아요",
                            korean: "좋은 것 같아요",
                            romanization: "joeun geot gatayo",
                            options: ["It's bad", "I think it's good", "It's the best", "It's not great"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'It's the best'?",
                            korean: null,
                            options: ["별로예요", "최고예요", "좋아요", "싫어요"],
                            correct: 1
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
                            options: ["괜찮아요?", "안녕하세요?", "뭐예요?"]
                        },
                        {
                            id: 2,
                            npc: "excited_friend",
                            task: "Say you're also excited",
                            correctAnswer: "저도 신나요!",
                            options: ["저도 신나요!", "저도 슬퍼요!", "저도 피곤해요!"]
                        },
                        {
                            id: 3,
                            npc: "worried_person",
                            task: "Ask what's wrong",
                            correctAnswer: "무슨 일 있어요?",
                            options: ["무슨 일 있어요?", "어디 가요?", "뭐 먹어요?"]
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
                            formal: "맞아요",
                            informal: "맞아",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "저도 그렇게 생각해요",
                            romanization: "jeodo geureoke saenggakhaeyo",
                            meaning: "I think so too",
                            formal: "저도 그렇게 생각해요",
                            informal: "나도 그렇게 생각해",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "글쎄요",
                            romanization: "geulsseyo",
                            meaning: "Well... / I'm not sure",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "아닌 것 같아요",
                            romanization: "anin geot gatayo",
                            meaning: "I don't think so",
                            formal: "아닌 것 같아요",
                            informal: "아닌 것 같아",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "동의해요",
                            romanization: "donguihaeyo",
                            meaning: "I agree",
                            formal: "동의해요",
                            informal: "동의해",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 맞아요",
                            korean: "맞아요",
                            romanization: "majayo",
                            options: ["That's wrong", "That's right", "I don't know", "Maybe"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I don't think so'?",
                            korean: null,
                            options: ["맞아요", "동의해요", "아닌 것 같아요", "글쎄요"],
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
                            formal: "좋아해요",
                            informal: "좋아해",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "싫어해요",
                            romanization: "sireohaeyo",
                            meaning: "I dislike (it)",
                            formal: "싫어해요",
                            informal: "싫어해",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 좋아요",
                            romanization: "... joayo",
                            meaning: "... is good / I like ...",
                            formal: "좋아요",
                            informal: "좋아",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 싫어요",
                            romanization: "... sireoyo",
                            meaning: "... is bad / I don't like ...",
                            formal: "싫어요",
                            informal: "싫어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "제일 좋아하는",
                            romanization: "jeil joahaneun",
                            meaning: "Favorite",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I like coffee.",
                            sentence: "커피 ___",
                            answer: "좋아해요",
                            options: ["좋아해요", "싫어해요", "있어요", "없어요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 제일 좋아하는",
                            korean: "제일 좋아하는",
                            romanization: "jeil joahaneun",
                            options: ["Least favorite", "Favorite", "I like", "I dislike"],
                            correct: 1
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
                            korean: "왜냐하면",
                            romanization: "waenyahamyeon",
                            meaning: "Because",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 때문에",
                            romanization: "... ttaemune",
                            meaning: "Because of ...",
                            audio: null
                        },
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
                            type: "word-card",
                            korean: "그리고",
                            romanization: "geurigo",
                            meaning: "And",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 그래서",
                            korean: "그래서",
                            romanization: "geuraeseo",
                            options: ["Because", "So/Therefore", "But", "And"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'But/However'?",
                            korean: null,
                            options: ["그래서", "그런데", "그리고", "왜냐하면"],
                            correct: 1
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
                            korean: "... 할까요?",
                            romanization: "... halkkayo?",
                            meaning: "Shall we ...?",
                            formal: "... 할까요?",
                            informal: "... 할까?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 하는 게 어때요?",
                            romanization: "... haneun ge eottaeyo?",
                            meaning: "How about ...ing?",
                            formal: "... 하는 게 어때요?",
                            informal: "... 하는 게 어때?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "같이 가요",
                            romanization: "gachi gayo",
                            meaning: "Let's go together",
                            formal: "같이 가요",
                            informal: "같이 가",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "좋아요!",
                            romanization: "joayo!",
                            meaning: "Sounds good!",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "다음에요",
                            romanization: "daeume yo",
                            meaning: "Next time",
                            audio: null
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Shall we eat?",
                            sentence: "먹을___?",
                            answer: "까요",
                            options: ["까요", "거예요", "어요", "아요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 같이 가요",
                            korean: "같이 가요",
                            romanization: "gachi gayo",
                            options: ["Go alone", "Let's go together", "Don't go", "Where are you going?"],
                            correct: 1
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
                            options: ["I'm sad", "I'm happy", "I'm angry", "I'm tired"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you ask 'Are you okay?'",
                            korean: null,
                            options: ["뭐예요?", "괜찮아요?", "어디예요?", "누구예요?"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I think it's good.",
                            sentence: "좋은 것 ___",
                            answer: "같아요",
                            options: ["같아요", "있어요", "없어요", "해요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 맞아요",
                            korean: "맞아요",
                            romanization: "majayo",
                            options: ["That's wrong", "That's right", "I don't know", "Maybe"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'So/Therefore'?",
                            korean: null,
                            options: ["그런데", "그래서", "그리고", "왜냐하면"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Let's go together.",
                            sentence: "___ 가요",
                            answer: "같이",
                            options: ["같이", "혼자", "빨리", "천천히"]
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
                            korean: "약속",
                            romanization: "yaksok",
                            meaning: "Appointment / Promise",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "시간 있어요?",
                            romanization: "sigan isseoyo?",
                            meaning: "Do you have time?",
                            formal: "시간 있어요?",
                            informal: "시간 있어?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "언제 괜찮아요?",
                            romanization: "eonje gwaenchanayo?",
                            meaning: "When is good for you?",
                            formal: "언제 괜찮아요?",
                            informal: "언제 괜찮아?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 에 만나요",
                            romanization: "... e mannayo",
                            meaning: "Let's meet at ...",
                            formal: "... 에 만나요",
                            informal: "... 에 만나",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "약속 있어요",
                            romanization: "yaksok isseoyo",
                            meaning: "I have an appointment",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 시간 있어요?",
                            korean: "시간 있어요?",
                            romanization: "sigan isseoyo?",
                            options: ["What time is it?", "Do you have time?", "When is it?", "Where is it?"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: Let's meet at 3 o'clock.",
                            sentence: "세 시에 ___",
                            answer: "만나요",
                            options: ["만나요", "가요", "와요", "해요"]
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
                            type: "word-card",
                            korean: "... 씨 계세요?",
                            romanization: "... ssi gyeseyo?",
                            meaning: "Is Mr./Ms. ... there?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "잠시만 기다리세요",
                            romanization: "jamsiman gidariseyo",
                            meaning: "Please wait a moment",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "다시 전화할게요",
                            romanization: "dasi jeonhwahalgeyo",
                            meaning: "I'll call back",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "메시지 남겨 주세요",
                            romanization: "mesiji namgyeo juseyo",
                            meaning: "Please leave a message",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 여보세요",
                            korean: "여보세요",
                            romanization: "yeoboseyo",
                            options: ["Goodbye", "Hello (on phone)", "Thank you", "Sorry"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "How do you say 'I'll call back'?",
                            korean: null,
                            options: ["잠시만 기다리세요", "다시 전화할게요", "메시지 남겨 주세요", "여보세요"],
                            correct: 1
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
                            korean: "아파요",
                            romanization: "apayo",
                            meaning: "It hurts / I'm sick",
                            formal: "아파요",
                            informal: "아파",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "어디가 아파요?",
                            romanization: "eodiga apayo?",
                            meaning: "Where does it hurt?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "머리가 아파요",
                            romanization: "meoriga apayo",
                            meaning: "I have a headache",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "배가 아파요",
                            romanization: "baega apayo",
                            meaning: "I have a stomachache",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "감기에 걸렸어요",
                            romanization: "gamgie geollyeosseoyo",
                            meaning: "I caught a cold",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "약",
                            romanization: "yak",
                            meaning: "Medicine",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 머리가 아파요",
                            korean: "머리가 아파요",
                            romanization: "meoriga apayo",
                            options: ["I have a stomachache", "I have a headache", "I caught a cold", "I'm tired"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I caught a cold.",
                            sentence: "감기에 ___",
                            answer: "걸렸어요",
                            options: ["걸렸어요", "아파요", "있어요", "없어요"]
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
                            korean: "은행",
                            romanization: "eunhaeng",
                            meaning: "Bank",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "계좌",
                            romanization: "gyejwa",
                            meaning: "Account",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "계좌를 만들고 싶어요",
                            romanization: "gyejwareul mandeulgo sipeoyo",
                            meaning: "I want to open an account",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "돈을 보내고 싶어요",
                            romanization: "doneul bonaego sipeoyo",
                            meaning: "I want to send money",
                            audio: null
                        },
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
                            options: ["I want to open an account", "I want to send money", "I want to exchange money", "I want to withdraw money"],
                            correct: 2
                        },
                        {
                            type: "multiple-choice",
                            question: "What does '계좌' mean?",
                            korean: "계좌",
                            options: ["Bank", "Money", "Account", "Card"],
                            correct: 2
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
                            options: ["예약하고 싶어요", "취소하고 싶어요", "변경하고 싶어요"]
                        },
                        {
                            id: 2,
                            npc: "doctor",
                            task: "Tell the doctor you have a headache",
                            correctAnswer: "머리가 아파요",
                            options: ["머리가 아파요", "배가 아파요", "다리가 아파요"]
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
                            korean: "... 습니다/ㅂ니다",
                            romanization: "... seumnida/mnida",
                            meaning: "Very formal sentence ending",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "감사합니다",
                            romanization: "gamsahamnida",
                            meaning: "Thank you (very formal)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "죄송합니다",
                            romanization: "joesonghamnida",
                            meaning: "I'm sorry (very formal)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "알겠습니다",
                            romanization: "algesseumnida",
                            meaning: "I understand (very formal)",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "부탁드립니다",
                            romanization: "butakdeurimnida",
                            meaning: "Please (very formal request)",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 알겠습니다",
                            korean: "알겠습니다",
                            romanization: "algesseumnida",
                            options: ["I don't know", "I understand", "I'm sorry", "Thank you"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "Which is the most formal way to say 'Please'?",
                            korean: null,
                            options: ["주세요", "줘", "부탁드립니다", "부탁해"],
                            correct: 2
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
                            type: "word-card",
                            korean: "보고서",
                            romanization: "bogoseo",
                            meaning: "Report",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "마감일",
                            romanization: "magamil",
                            meaning: "Deadline",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "출장",
                            romanization: "chuljang",
                            meaning: "Business trip",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "회의가 있습니다",
                            romanization: "hoeuiga isseumnida",
                            meaning: "There is a meeting",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "What does '마감일' mean?",
                            korean: "마감일",
                            romanization: "magamil",
                            options: ["Meeting", "Report", "Deadline", "Business trip"],
                            correct: 2
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: There is a meeting.",
                            sentence: "회의가 ___",
                            answer: "있습니다",
                            options: ["있습니다", "없습니다", "합니다", "갑니다"]
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
                            korean: "... 고 싶어요",
                            romanization: "... go sipeoyo",
                            meaning: "I want to ...",
                            formal: "... 고 싶어요",
                            informal: "... 고 싶어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 으면 좋겠어요",
                            romanization: "... eumyeon jokesseoyo",
                            meaning: "I wish ... / It would be nice if ...",
                            formal: "... 으면 좋겠어요",
                            informal: "... 으면 좋겠어",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "한국에 가고 싶어요",
                            romanization: "hanguge gago sipeoyo",
                            meaning: "I want to go to Korea",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "한국어를 잘하면 좋겠어요",
                            romanization: "hangugeoreul jalhamyeon jokesseoyo",
                            meaning: "I wish I could speak Korean well",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 한국에 가고 싶어요",
                            korean: "한국에 가고 싶어요",
                            romanization: "hanguge gago sipeoyo",
                            options: ["I went to Korea", "I want to go to Korea", "I'm going to Korea", "I came from Korea"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I want to eat.",
                            sentence: "먹___ 싶어요",
                            answer: "고",
                            options: ["고", "어", "아", "으"]
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
                            korean: "... 을/ㄹ 거예요",
                            romanization: "... eul/l geoyeyo",
                            meaning: "I will ... / I'm going to ...",
                            formal: "... 을/ㄹ 거예요",
                            informal: "... 을/ㄹ 거야",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "... 을/ㄹ 예정이에요",
                            romanization: "... eul/l yejeongieyo",
                            meaning: "I'm planning to ...",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "내일 뭐 할 거예요?",
                            romanization: "naeil mwo hal geoyeyo?",
                            meaning: "What are you going to do tomorrow?",
                            formal: "내일 뭐 할 거예요?",
                            informal: "내일 뭐 할 거야?",
                            audio: null
                        },
                        {
                            type: "word-card",
                            korean: "여행 갈 거예요",
                            romanization: "yeohaeng gal geoyeyo",
                            meaning: "I'm going to travel",
                            audio: null
                        },
                        {
                            type: "translate",
                            question: "Translate: 내일 뭐 할 거예요?",
                            korean: "내일 뭐 할 거예요?",
                            romanization: "naeil mwo hal geoyeyo?",
                            options: ["What did you do yesterday?", "What are you doing now?", "What are you going to do tomorrow?", "What do you want to do?"],
                            correct: 2
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I'm going to travel.",
                            sentence: "여행 ___ 거예요",
                            answer: "갈",
                            options: ["갈", "가", "간", "가는"]
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
                            korean: null,
                            options: ["안녕하세요", "여보세요", "감사합니다", "죄송합니다"],
                            correct: 1
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I have a headache.",
                            sentence: "머리가 ___",
                            answer: "아파요",
                            options: ["아파요", "있어요", "없어요", "좋아요"]
                        },
                        {
                            type: "translate",
                            question: "Translate: 알겠습니다",
                            korean: "알겠습니다",
                            romanization: "algesseumnida",
                            options: ["I don't know", "I understand", "I'm sorry", "Thank you"],
                            correct: 1
                        },
                        {
                            type: "multiple-choice",
                            question: "What does '마감일' mean?",
                            korean: "마감일",
                            options: ["Meeting", "Report", "Deadline", "Business trip"],
                            correct: 2
                        },
                        {
                            type: "fill-blank",
                            question: "Complete: I want to go to Korea.",
                            sentence: "한국에 ___ 싶어요",
                            answer: "가고",
                            options: ["가고", "가서", "가면", "가는"]
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
                { id: "shopkeeper", name: "Shopkeeper", sprite: "shopkeeper", x: 300, y: 200, dialog: "Welcome to my shop!" },
                { id: "customer", name: "Customer", sprite: "customer", x: 500, y: 350, dialog: "Excuse me..." }
            ]
        },
        restaurant_adventure: {
            id: "restaurant_adventure",
            title: "Restaurant Adventure",
            mapType: "restaurant",
            npcs: [
                { id: "waiter", name: "Waiter", sprite: "waiter", x: 400, y: 150, dialog: "Welcome! Table for one?" }
            ]
        },
        shopping_street: {
            id: "shopping_street",
            title: "Shopping Street",
            mapType: "street",
            npcs: [
                { id: "shopkeeper", name: "Shopkeeper", sprite: "shopkeeper", x: 250, y: 200, dialog: "Looking for something?" },
                { id: "stranger", name: "Stranger", sprite: "stranger", x: 550, y: 300, dialog: "Excuse me..." }
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