import React from 'react';

function getTimingFeedback(section, timing, guesses){
    /**
     * @param {string} section; represents section of the test (english, reading, etc)
     * @param {string} timing; qualitative measure of student's timing
     * @param {int} guesses; number of guesses student made
     * @return {JSX}; React component containing feedback on time management. 
     */

    switch(section){
        case 'english':
            if(timing === 'fast'){

                return(
                    <div>
                        You finished today's test More than 3 minutes early. Consider the points below when you next meet with your coach.
                        <ul>
                            <li>Remember the S in <strong>STOP</strong>: 
                                Slow down. The English is a section where you can afford to stop and think.</li>
                            <li>Make sure you are labelling each question by type and that you are applying 
                                TAC's strategies to each question.</li>
                        </ul>
                        You had to make <strong>{`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`}</strong> on today's test.
                    </div>
                    
                );
            } else if(timing === 'slow' && guesses > 0) {
                
                return(
                    <div>
                        {<span>You ran out of time on today's test and had to guess on <strong>{`${guesses} ${guesses === 1 ? 'question' : 'questions'}`}</strong> 
                        as a result. During your next session, consider the following points with your coach:`</span>}
                        <ul>
                            <li>Remember to use your ACT stopwatch to keep track of time and not
                                to spend too long on any one question or passage.</li>
                            <li>Prioritize time-saving strategies. For example, always check concise answers first; 
                                if it works, don't spend time worrying about
                                more complicated answer choices.</li>
                        </ul>
                    </div>
                );
            } else if(timing === 'slow'){
                return(
                    <div>
                        {`You did not have to guess on any questions, but you did feel rushed. 
                            During your next session, your coach will review the following:`}
                        <ul>
                            <li> 
                                Remember to use your ACT stopwatch to keep track of time and not
                                to spend too long on any one question or passage.
                            </li>
                            <li>
                                Make sure you are labelling each question by type!
                            </li>
                            <li>
                                Prioritize time-saving strategies. Always check concise answers first; 
                                if it works, don't worry about
                                more complicated answer choices.
                            </li>
                        </ul>
                    </div>
                );
            } else {
                return `Nice work on time management! You answered every question with ${`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`} and gave appropriate time
                        to each question without feeling rushed or having a lot of time left over. Keep it up!`
            }

        case 'math':
            if(timing === 'fast'){

                return(
                    <div>
                        You finished today's test More than 3 minutes early. Consider the points below when you next meet with your coach.
                        <ul>
                            <li>
                                The Math section is where students often make the most careless errors! 
                                Use your time fully to annotate harder word problems and plug your work
                                into your calculator.
                            </li>
                            <li>
                                Make sure to follow the time management plan you have developed with your coach.
                            </li>
                        </ul>
                        You had to make <strong>{`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`}</strong> on today's test.
                    </div>
                    
                );
            } else if(timing === 'slow' && guesses > 0) {
                
                return(
                    <div>
                        {<span>You ran out of time on today's test and had to guess on <strong>{`${guesses} ${guesses === 1 ? 'question' : 'questions'}`}</strong> 
                        as a result. During your next session, consider the following points with your coach:`</span>}
                        <ul>
                            <li>
                                Remember to use your ACT stopwatch to keep track of time and not
                                to spend too long on any one question or passage.
                            </li>
                            <li>
                                Don't forget to use SUPERB strategies! For example, if all the answers involve complicated
                                expressions, consider finding ways to eliminate wrong answers. 
                            </li>
                        </ul>
                    </div>
                );
            } else if(timing === 'slow'){
                return(
                    <div>
                        {`You marked your test as having no guesses, but you felt rushed. During your next session, your coach will review the following:`}
                        <ul>
                            <li>
                                Remember to use your ACT stopwatch to keep track of time and not
                                to spend too long on any one question.
                            </li>
                            <li>
                                Don't forget to use SUPERB strategies! For example, if all the answers involve complicated
                                expressions, consider finding ways to eliminate wrong answers. 
                            </li>
                        </ul>
                    </div>
                );
            } else {
                return `Nice work on time management! You answered every question with ${`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`} and gave appropriate time
                        to each question without feeling rushed or having a lot of time left over. Keep it up!`
            }
        case 'reading':
            if(timing === 'fast'){

                return(
                    <div>
                        You finished today's test More than 3 minutes early. Consider the points below when you next meet with your coach.
                        <ul>
                            <li>
                                You should be able to cite a specific line reference for every detail question. Remember the R in SMART:
                                Research as much as needed!
                            </li>
                            <li>
                                Don't rush the initial read! Although annotating for NIFT takes time, it can make a big difference
                                 with all question types.
                            </li>
                        </ul>
                        You had to make <strong>{`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`}</strong> on today's test.
                    </div>
                    
                );
            } else if(timing === 'slow' && guesses > 0) {
                
                return(
                    <div>
                        {<span>You ran out of time on today's test and had to guess on <strong>{`${guesses} ${guesses === 1 ? 'question' : 'questions'}`}</strong> 
                        as a result. During your next session, consider the following points with your coach:`</span>}
                        <ul>
                            <li>
                                Never spend more than 9 minutes on each passage. Work the easiest questions first, then
                                go back through harder questions.
                            </li>
                            <li>
                                If you hit the 9 minute limit on any passage, make a strategic guess on the remaining questions and move on.
                            </li>
                        </ul>
                    </div>
                );
            } else if(timing === 'slow'){
                return(
                    <div>
                        {`You marked your test as having no guesses, but you felt rushed and may
                        have made some errors as a result. During your next session, your coach will review the following:`}
                        <ul>
                            <li>
                                Never spend more than 9 minutes on each passage. Work the easiest questions first, then
                                go back through harder questions.
                            </li>
                            <li>
                                If you hit the 9 minute limit on any passage, make a strategic guess on the remaining questions and move on.
                            </li>
                        </ul>
                    </div>
                );
            } else {
                return `Nice work on time management! You answered every question with ${`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`} and gave appropriate time
                        to each question without feeling rushed or having a lot of time left over. Keep it up!`
            }
        default /* science */:
        if(timing === 'fast'){

            return(
                <div>
                    You finished today's test More than 3 minutes early. Review the following with your coach:
                    <ul>
                        <li>
                            Your coach will help you develop a plan for quickly analyzing the passage for key items
                            like variables and trends. Make sure to follow this plan.
                        </li>
                        <li>
                            If you consistently finish early, slow down and pay extra attention to the hardest questions:
                            New Information and Method questions.
                        </li>
                    </ul>
                    You had to make <strong>{`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`}</strong> on today's test.
                </div>
                
            );
        } else if(timing === 'slow' && guesses > 0) {
            
            return(
                <div>
                    {<span>You ran out of time on today's test and had to guess on <strong>{`${guesses} ${guesses === 1 ? 'question' : 'questions'}`}</strong>
                    as a result. During your next session, consider the following points with your coach:`</span>}
                    <ul>
                        <li>
                            Remember to use your ACT stopwatch to keep track of time and not
                            to spend too long on any one question or passage.
                        </li>
                        <li>
                            Work on analyzing the passage! We only get a MAX of 90 seconds to understand the passage. Your 
                            coach will work with you on identifying the most important information quickly. 
                        </li>
                    </ul>
                </div>
            );
        } else if(timing === 'slow'){
            return(
                <div>
                    {`You did not have to guess on any questions, but you did feel rushed. 
                            During your next session, your coach will review the following:`}
                    <ul>
                        <li> 
                            Remember to use your ACT stopwatch to keep track of time and not
                            to spend too long on any one question or passage.
                        </li>
                        <li>
                            Work on analyzing the passage! We only get a MAX of 90 seconds to understand the passage. Your 
                            coach will work with you on identifying the most important information quickly. 
                        </li>
                    </ul>
                </div>
            );
        } else {
            return `Nice work on time management! You answered every question with ${`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`}
                     and gave appropriate time to each question without feeling rushed or having a lot of time left over. Keep it up!`
        }
    }

}

export default getTimingFeedback;