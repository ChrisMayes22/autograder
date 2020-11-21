import React from 'react';

function getTimingFeedback(_, timing, guesses){ // TODO: Get rid of first param across program
    /**
     * @param {string} section; represents section of the test (english, reading, etc)
     * @param {string} timing; qualitative measure of student's timing
     * @param {int} guesses; number of guesses student made
     * @return {JSX}; React component containing feedback on time management. 
     */


    if(timing === 'fast'){

        return(
            <div>
                You finished today's test More than 3 minutes early 
                and had to make <strong>{`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`}</strong> on today's test.
                Your coach will work with you on strategies to make the most of your time.
            </div> 
        );
    } else if(timing === 'slow' && guesses > 0) {
        return(
            <div>
                {<span>You ran out of time on today's test and had to guess on <strong>{`${guesses} ${guesses === 1 ? 'question' : 'questions'}`}</strong> 
                as a result. Your coach will work with you on strategies to work more efficiently. </span>}
            </div>
        );
    } else if(timing === 'slow'){
        return(
            <div>
                {`You did not have to guess on any questions, but you did feel rushed. 
                    During your next session, your coach will review strategies to work more efficiently`}
            </div>
        );
    } else {
        return `Nice work on time management! You answered every question with ${`${guesses} ${guesses === 1 ? 'guess' : 'guesses'}`} and gave appropriate time
                to each question without feeling rushed or having a lot of time left over. Keep it up!`
    }
}


export default getTimingFeedback;