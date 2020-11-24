const questionTypes = {
    /**
     * Keys are types of questions on each section
     * and values are the number of errors for that question type
     */
    english: {  // ACT
        'conciseness': 0,
        'inference': 0,
        'punctuation': 0,
        'placement': 0,
        'yes/no': 0,
        'modifying clauses': 0,
        'subject/verb agreement': 0,
        'verb tense': 0,
        'omit/delete': 0,
        'possessives': 0,
        'parallelism':0,
        'transitions':0,
        'pronouns':0,
        'vocab in context':0,
        'adjectives / adverbs':0,
        'passive voice':0,
        'ambiguity / vagueness':0,
        'comparisons':0,
        'fixed expressions':0,
        'prepositions':0
    },
    writing: {  // SAT
        'conciseness': 0,
        'inference': 0,
        'punctuation': 0,
        'placement': 0,
        'yes/no': 0,
        'modifying clauses': 0,
        'subject/verb agreement': 0,
        'verb tense': 0,
        'omit/delete': 0,
        'possessives': 0,
        'parallelism':0,
        'transitions':0,
        'pronouns':0,
        'vocab in context':0,
        'adjectives / adverbs':0,
        'passive voice':0,
        'ambiguity / vagueness':0,
        'comparisons':0,
        'fixed expressions':0,
        'prepositions':0
    },
    math: {  // ACT
        '1-20':0,
        '21-40':0,
        '41-60':0
    },
    math1: {  // SAT
        'grid-ins':0,
        '1-15 (no calculator)':0,
    },
    math2: {
        '1-15 (calculator active)': 0,
        'grid-ins': 0,
        '16-30': 0
    },
    reading: {
        'detail':0,
        'inference':0,
        'purpose':0,
        'vocab in context':0,
        'big picture':0,
        'best evidence':0
    },
    science: {
        'detail':0,
        'trend':0,
        'method':0,
        'outside information':0,
        'new information':0,
        'inference':0
    }
}

export default questionTypes