const feedback = {
    /** 
     * Dictionary whose keys correspond to question types on each section of the ACT.
     * Values are feedback given when students miss these types of questions.
     */
    english: {
        'conciseness': `Remember with most questions to prioritize the shortest answer! That means the answer with the fewest words 
            and the least punctuation. Choose these answers if they are grammatically correct. While there are some exceptions, this 
            strategy alone accounts for as many as 12 questions per test. Your coach will review the exceptions with you.`,
        'inference': `Inference questions ask you to follow certain directions: to find the "most vivid description," or the "best transition." 
            Focus ONLY on what the question asks for. If the questions asks for a descriptive answer, 
            then don't worry about conciseness or what makes sense...just pick the most descriptive answer.`,
        'punctuation': `Punctuation is one of the best opportunities to improve quickly! Your coach will share resources
            with you for learning and practicing all of the punctuation rules tested on the ACT, like our punctuation cheat sheet,
            targeted IXL assignments, and exercises that focus on the hardest examples of different question types.`,
        'placement': `Most placement question--which ask you to find the best place in a paragraph for a sentence--have some word 
            that only make sense in context. For example, look for pronouns and transition words. For example, to whom does "he" refer? 
            If the answer is "the father," then eliminate any answers that place the test before the father is introduced.`,
        'yes/no': `Yes/No questions ask whether you should  include or remove an excerpt from the passage. Always start by deciding 
            whether you should choose one of the "yes" answers or one of the "no" answers. To do this, ask yourself "is the excerpt
            relevant, new information?" If so, keep it; if not, get rid of it.`,
        'modifying clauses': `In the sentence "Running down the hill, George fell down," can you spot the modifier? It's the phrase 
            "Running down the hill." Phrases that begin sentences with an -ing word are always modifiers, and they must always
            be followed by a comma and the thing they are describing. Your coach will give you some examples of bad modifiers!`,
        'subject/verb agreement': `You should always check two things with verb-related questions: What is the subject and what is the tense?
            The ACT makes this hard by hiding verb subjects behind interrupters and prepositional phrases...so cross them out! Turn 
            "The king of the Spaniards, Juan the Great, is kind" into "The king...is kind." `,
        'verb tense': `You should always check two things with verb-related questions: What is the subject and what is the tense? To
            identify tense, find another verb THAT IS NOT UNDERLINED FOR A QUESTION and match its tense. Watch out, however: avoid 
            -ing words and to phrases like "to run," since these do not have tense.`,
        'omit/delete': `For questions where you have 3 answers with text and 1 answer that is "OMIT/DELETE", always plug in the OMIT/DELETE
            option first. If it works, don't even worry about the other sections!`,
        'possessives': `Possessives refer to nouns that own something. For example, "The dog's food" is a possessive phrase.
            Remember that "dog's" indicates one dog owning something, while "dogs'" indicates many. However, we only do this for nouns whose
            plurals end with "s": we would still write "the children's ball", for example. Your coach will work with you through other tricky cases!`,
        'parallelism': `When phrases come in a list, they should be written with the same form. For example, "The man came running, rolling, and jumping
            towards me" demonstrates parallelism, as does "The tall, strange, curly woman lived in the tall, strange, curly house."`,
        'transitions':`Your coach will discuss with you four types of transitions: causation, contrast, addition, and timing. The way to crack
            transition questions is to decide what kind of transition you need to connect two parts of the sentence. Then, eliminate all transitions
            except that type and pick the best answer from what remains.`,
        'pronouns':`Pronoun questions are similar to subject/verb agreement questions: Look for the subject the pronoun is standing in for 
            (also called the antecedent). Make sure if you substitute that word in for the pronoun, the sentence still makes sense. Then,
            make them match for gender and number. If it's plural, use they; if it's a woman, use she...and so on.`,
        'vocab in context':`These are called vocab in CONTEXT for a reason! Don't just rely on the dictionary definition of the words: look at the 
            surrounding sentence. Is it positive in tone, or negative? Make sure to plug your answer in and read the sentence as a whole. If there are 
            2 or more vocabulary terms you don't know at all, don't spend too long on the question: guess and move on.`,
        'adjectives/adverbs': `Adjectives describe nouns, while adverbs describe verbs (actions) and adjectives (descriptions). For example, in the
            sentence "Adrian is quite green and likes to run quickly," green is an adjective, while quickly and quite are adverbs. If you see answer choices
            like "quickly" and quick, determine if it is describing an action or a noun.`,
        'passive voice': `If a sentence is in passive voice, that means that action is being done TO the subject. For example, "I was carried by my friends" 
            is in passive voice, as is "The paper was finally written." The ACT does not like passive voice! Always look for an active sentence, like
            "My friends carried me" or "I wrote the paper."`,
        'ambiguity/vagueness':`This is one of the rare exceptions to conciseness. If a word is so vague that you can't form a mental image of it,
            choose a more specific answer! For example, if you see three pronouns in answer choices and "the professor of meteorology," the answer with
            the professor is correct even though it is not at all concise!`,
        'comparisons':`Remember that "than" is used for comparisons, as in "Alaska is bigger THAN Colorado," while "then" is used to describe time. Meanwhile,
            also bear in mind that you should use comparatives like "more" when comparing two items, and superlatives like "most" when comparing
            three or more items.`,
        'fixed expressions': `Certain phrases are given as standard in English. For example, if you see "either," you should always also see an "or" in
            that same sentence. Your coach can provide you with a full list of fixed expressions!`,
        'prepositions': `Remember the word POSITION in preposition: these are words that show relationships between things, like on, under, over, through
            by, and of. Your coach can provide you with materials for practicing prepositions common on the test!`
    },
    satWriting: {
        'conciseness': `Remember with most questions to prioritize the shortest answer! That means the answer with the fewest words 
            and the least punctuation. Choose these answers if they are grammatically correct. While there are some exceptions, this 
            strategy alone accounts for as many as 12 questions per test. Your coach will review the exceptions with you.`,
        'inference': `Inference questions ask you to follow certain directions: to find the "most vivid description," or the "best transition." 
            Focus ONLY on what the question asks for. If the questions asks for a descriptive answer, 
            then don't worry about conciseness or what makes sense...just pick the most descriptive answer.`,
        'punctuation': `Punctuation is one of the best opportunities to improve quickly! Your coach will share resources
            with you for learning and practicing all of the punctuation rules tested on the SAT, like our punctuation cheat sheet,
            targeted IXL assignments, and exercises that focus on the hardest examples of different question types.`,
        'placement': `Most placement question--which ask you to find the best place in a paragraph for a sentence--have some word 
            that only make sense in context. For example, look for pronouns and transition words. For example, to whom does "he" refer? 
            If the answer is "the father," then eliminate any answers that place the test before the father is introduced.`,
        'yes/no': `Yes/No questions ask whether you should  include or remove an excerpt from the passage. Always start by deciding 
            whether you should choose one of the "yes" answers or one of the "no" answers. To do this, ask yourself "is the excerpt
            relevant, new information?" If so, keep it; if not, get rid of it.`,
        'modifying clauses': `In the sentence "Running down the hill, George fell down," can you spot the modifier? It's the phrase 
            "Running down the hill." Phrases that begin sentences with an -ing word are always modifiers, and they must always
            be followed by a comma and the thing they are describing. Your coach will give you some examples of bad modifiers!`,
        'subject/verb agreement': `You should always check two things with verb-related questions: What is the subject and what is the tense?
            The ACT makes this hard by hiding verb subjects behind interrupters and prepositional phrases...so cross them out! Turn 
            "The king of the Spaniards, Juan the Great, is kind" into "The king...is kind." `,
        'verb tense': `You should always check two things with verb-related questions: What is the subject and what is the tense? To
            identify tense, find another verb THAT IS NOT UNDERLINED FOR A QUESTION and match its tense. Watch out, however: avoid 
            -ing words and to phrases like "to run," since these do not have tense.`,
        'omit/delete': `For questions where you have 3 answers with text and 1 answer that is "OMIT/DELETE", always plug in the OMIT/DELETE
            option first. If it works, don't even worry about the other sections!`,
        'possessives': `Possessives refer to nouns that own something. For example, "The dog's food" is a possessive phrase.
            Remember that "dog's" indicates one dog owning something, while "dogs'" indicates many. However, we only do this for nouns whose
            plurals end with "s": we would still write "the children's ball", for example. Your coach will work with you through other tricky cases!`,
        'parallelism': `When phrases come in a list, they should be written with the same form. For example, "The man came running, rolling, and jumping
            towards me" demonstrates parallelism, as does "The tall, strange, curly woman lived in the tall, strange, curly house."`,
        'transitions':`Your coach will discuss with you four types of transitions: causation, contrast, addition, and timing. The way to crack
            transition questions is to decide what kind of transition you need to connect two parts of the sentence. Then, eliminate all transitions
            except that type and pick the best answer from what remains.`,
        'pronouns':`Pronoun questions are similar to subject/verb agreement questions: Look for the subject the pronoun is standing in for 
            (also called the antecedent). Make sure if you substitute that word in for the pronoun, the sentence still makes sense. Then,
            make them match for gender and number. If it's plural, use they; if it's a woman, use she...and so on.`,
        'vocab in context':`These are called vocab in CONTEXT for a reason! Don't just rely on the dictionary definition of the words: look at the 
            surrounding sentence. Is it positive in tone, or negative? Make sure to plug your answer in and read the sentence as a whole. If there are 
            2 or more vocabulary terms you don't know at all, don't spend too long on the question: guess and move on.`,
        'adjectives / adverbs': `Adjectives describe nouns, while adverbs describe verbs (actions) and adjectives (descriptions). For example, in the
            sentence "Adrian is quite green and likes to run quickly," green is an adjective, while quickly and quite are adverbs. If you see answer choices
            like "quickly" and quick, determine if it is describing an action or a noun.`,
        'passive voice': `If a sentence is in passive voice, that means that action is being done TO the subject. For example, "I was carried by my friends" 
            is in passive voice, as is "The paper was finally written." The SAT does not like passive voice! Always look for an active sentence, like
            "My friends carried me" or "I wrote the paper."`,
        'ambiguity / vagueness':`This is one of the rare exceptions to conciseness. If a word is so vague that you can't form a mental image of it,
            choose a more specific answer! For example, if you see three pronouns in answer choices and "the professor of meteorology," the answer with
            the professor is correct even though it is not at all concise!`,
        'comparisons':`Remember that "than" is used for comparisons, as in "Alaska is bigger THAN Colorado," while "then" is used to describe time. Meanwhile,
            also bear in mind that you should use comparatives like "more" when comparing two items, and superlatives like "most" when comparing
            three or more items.`,
        'fixed expressions': `Certain phrases are given as standard in English. For example, if you see "either," you should always also see an "or" in
            that same sentence. Your coach can provide you with a full list of fixed expressions!`,
        'prepositions': `Remember the word POSITION in preposition: these are words that show relationships between things, like on, under, over, through
            by, and of. Your coach can provide you with materials for practicing prepositions common on the test!`
    },
    math: {
        '1-20': `The first 20 questions cover the easiest topics, but sometimes these topics are from so long ago that students need a refresher!
            Your coach will provide you with materials for mastering these simpler problems, like our Math Cheat Sheet for the First Forty Questions.`,
        '21-40': `The middle 20 questions present some of the best opportunities to use our SUPERB strategies! Remember if you see integer answers in order
            to consider BACKSOLVING. Similarly, any time you see a phrase like "given that a is a positive integer," that is a clear sign that you should
            Pick Smart Numbers. Your coach will work with you to use these strategies to improve time and accuracy!`,
        '41-60': `These questions are the hardest on the ACT Math. It is especially critical to consistently make judicious use of SUPERB strategies.
            In addition, your coach will work with you, using materials like our Math Cheat Sheet for the Last Twenty Questions, to 
           learn and master the most challenging concepts tested on the ACT Math.`
    },
    reading: {
        'detail': `Detail questions have answers that are stated directly in the passage. To improve on these, work on making an efficient
            initial read. Your coach with you will work with you to implement NIFT annotations that will help you identify key information
            likely to come up in detail questions.`,
        'inference': `Inference questions ask you to use evidence given in the passage to come to a conclusion that is not directly stated.
            For these questions, try to eliminate answers by looking for choices that don't match the tone of the passage, that are outside
            the scope of the passage, or are over the top.`,
        'purpose':`Purpose questions ask you to explain why the author included an excerpt from the text. For these questions, focus on the main
            topic of the passage as a whole, then figure out how the excerpt would relate to that main idea. Then, pick the answer that best makes
            that connection. Your coach will work with you to target these questions!`,
        'vocab in context':`These are called vocab in CONTEXT for a reason! Don't just rely on the dictionary definition of the words: look at the 
            surrounding sentence. Is it positive in tone, or negative? Make sure to plug your answer in and read the sentence as a whole. If there are 
            2 or more vocabulary terms you don't know at all, don't spend too long on the question: guess and move on.`,
        'big picture': `Big picture questions deal with the main idea of the passage as a whole. For these, you should be able to answer these
            questions based on just your initial read. If you aren't sure, however, skim the first sentence of each paragraph and find
            the answer relevant to the largest number of paragraphs.`,
        'best evidence': `Best evidence questions ask you to find "the best evidence" for supporting the correct answer to a previous question.
            This provides you with an excellent opportunity! You know the right answer to the first question will be found in one of the places 
            indicated by the BE question, so only research in those excerpts!`
    },
    satReading: {
        'detail': `Detail questions have answers that are stated directly in the passage. To improve on these, work on making an efficient
            initial read. Your coach with you will work with you to implement NIFT annotations that will help you identify key information
            likely to come up in detail questions.`,
        'inference': `Inference questions ask you to use evidence given in the passage to come to a conclusion that is not directly stated.
            For these questions, try to eliminate answers by looking for choices that don't match the tone of the passage, that are outside
            the scope of the passage, or are over the top.`,
        'purpose':`Purpose questions ask you to explain why the author included an excerpt from the text. For these questions, focus on the main
            topic of the passage as a whole, then figure out how the excerpt would relate to that main idea. Then, pick the answer that best makes
            that connection. Your coach will work with you to target these questions!`,
        'vocab in context':`These are called vocab in CONTEXT for a reason! Don't just rely on the dictionary definition of the words: look at the 
            surrounding sentence. Is it positive in tone, or negative? Make sure to plug your answer in and read the sentence as a whole. If there are 
            2 or more vocabulary terms you don't know at all, don't spend too long on the question: guess and move on.`,
        'big picture': `Big picture questions deal with the main idea of the passage as a whole. For these, you should be able to answer these
            questions based on just your initial read. If you aren't sure, however, skim the first sentence of each paragraph and find
            the answer relevant to the largest number of paragraphs.`,
        'best evidence': `Best evidence questions ask you to find "the best evidence" for supporting the correct answer to a previous question.
            This provides you with an excellent opportunity! You know the right answer to the first question will be found in one of the places 
            indicated by the BE question, so only research in those excerpts!`
    },
    satMath1:{
        'grid-ins (no calculator)': `Remember to complete these questions first and to spend no more than 7 minutes on this section. Your coach will help you take
            advantage of some of the unique features of this section! For example, you always know that negative numbers are not valid answers on the 
            grid-ins.`,
        '1-15 (no calculator)': `Remember to SURVIVE on the math calculator active. This section accounts for only a third of the total points on your math score. 
            Use SUPERB strategies liberally, since it is especially important to keep calculations minimal when you have no calculator, and prioritize the
            first, easiest questions on this section.`
    },
    satMath2:{
        '1-15 (calculator active)': `The calculator-active section of the SAT Math is where you can THRIVE, since almost two thirds of your points come from this section.
            1-15 are particularly important because they are the easiest in the section but count just as much as later questions. Your coach will work with you
            to make the most of these questions!`,
        'grid-ins (calculator active)': `As with the no calculator section, the grid-ins present a unique challenge in that some SUPERB strategies are harder to implement. However,
            you also have unique strategies available, such as eliminating negative answer choices and irrational numbers like pi or e. Your coach
            will review these strategies with you.`,
        '16-30': `These questions are the hardest on the SAT Math. It is especially critical to consistently make judicious use of SUPERB strategies.
            In addition, your coach will work with you, using materials like our Math Cheat Sheet, to 
            learn and master the most challenging concepts tested on the SAT Math.`
    },
    science: {
        'detail': `Detail questions have answers that are stated directly in the passage. To improve on these, work on efficiently analyzing
            the passage for key items, like variables, trends, and procedures. Your coach will work with you to develop a system
            for going through the passage that suits your strengths!`,
        'trend': `Trend questions ask you to predict what the value of variable x will be based on the behavior of variable y. These 
            questions are much easier to work if you have a solid idea of the outside of how variables relate to each other. The plan you
            make with your coach for analyzing the passage will help you avoid these kinds of errors!`,
        'method': `Method questions ask why the scientists adopted certain procedures and test your knowledge of the scientific method. Your coach
            will work with you to thoroughly understand these concepts so you can apply them consistently to these types of questions! These questions
            are closely related to understanding independent and dependent variables, which you should identify as part of your initial skim`,
        'outside information': `These questions test knowledge of information not given in the test. Only a few of these questions appear on the test, 
            so your priority should be to master other question types first. However, your coach will work with you to master commonly tested
            content!`,
        'new information': `New Information questions are some of the most difficult on the test. These introduce novel information in the question
            and ask you to apply it to what you already know. The key to this type of question, as your coach will discuss, is to identify what variables
            the question cites and to see how the new information would affect these variables.`,
        'inference': `Inference questions come in two flavors: Trend and method. Trend questions ask you to identify how a change in one variable 
            affects another, and the key is to identify these trends during your initial read. Method questions ask why scientists took a particular
            procedure, and the key is to apply your knowledge of the scientific method--which you and your coach will review!`
    }
}

export default feedback;