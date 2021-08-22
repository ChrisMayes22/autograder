function parseDebrief(debrief){
    splitDebrief = debrief.replace( /\n/g, " " ).replace("  ", " ").split( " " )
    result = []
    answers = ['(A)', '(B)', '(C)', '(D)', '(E)', '(F)', '(G)', '(H)', '(J)', '(K)']
    for (let i = 0; i < splitDebrief.length; i++){
        if(answers.includes(splitDebrief[i])){
            result.push([splitDebrief[i].replace('(', "").replace(')', "")
            .replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), 
            splitDebrief[i+1].toLowerCase()])
        }
    }
    return result
}

// // ENGLISH, READING, SCIENCE
// console.log(parseDebrief(`

// (C) New Information  We know that the number of crickets would obviously be greater because the spiders have more time to eat, and since experiment 3 is a repeat of Experiment except with lab raised spiders we can see that the feeding time would have been doubled from a time of 1 hour to 2.
// (G) Detail The prediction that the scientists sought to prove is found in the first paragraph of the experiment. We can then see that in each graph, blue crickets are consistently consumed the most. Make sure that the student is marking the key components of the experiment such as its purpose.
// (B) Method Experiments 1 and 2 used the same set of 100 spiders, but experiment 3 was conducted with 100 new lab raised spiders.
// (H) Method Experiments 1 and 2 were the only experiments that used wild spiders, so that eliminates G and J. But if we want to see the effects of using a different species, then it wouldn’t make sense to use the same species of crickets. So, it must be H.
// (D) Method A and C can be eliminated because lab raised spiders were exclusive to experiment 3. Then, we must go with D because it is the only option that would give us distinctive values for each color of crickets that were consumed.
// (H) Detail The only difference offered about the spiders is that in experiments 1 and 2 they were wild, but in experiment three they were lab raised. The genus and species was kept the same throughout.
// (D) Detail   If we compare figures 1 and 2, it is very clear that more crickets were consumed when they were first brought in from the wild than after they had been in the lab for a month. A and B are incorrect because the amount of green crickets consumed in figures 2 and 3 did not change.

// Passage 2: The addition of a catalyst to a solution of mehtanol and pinnata oil. Percent of Biodiesel produced is observed by varying the catalyst, catalyst concentration, and microwave time.

// (H) Method / Outside Info  The student should know that higher temperatures typically mean higher reaction rates, while lower temperatures slow down reaction rates. Step 5 is when the flask was submerged into ice water, and then in step 6 measurements were taken, indicating that the experiment had stopped.
// (A) Detail  This can simply be found by looking back at the table. If the student is having a hard time remembering each value, they should circle the percentage of each answer option and then compare them to see which is LOWEST.
// (J) Trend  According to the table, there is not a definite correlation between either KOH or NAOH always being higher or lower. J is the option that provides the wiggle room we are looking for.
// (B) Method   Step 1 tells us that 80 ml of methanol were present in each trial, so we all need to do is multiply that by 44 to find the total amount of methanol used.
// (F) Detail   The student should be able to tell that the only difference between these two sets of trials is the type of catalyst being used.
// (A) Trend  Have the student look at trials 33-40. Here, KOH is used constantly, but the microwave time increases in each set of three trials. As the microwave time increases so does the percent converted to biodiesel fuel.
// (G) Trend  Since the solution had mixed in step 1 had a mass of 82 g and step 5 had a 1.0 percent by mass of NaOH added to it, then we can do some simple math to see that one percent of 82g is about 0.8g.



// Passage 3:
// (D) Detail This can be quickly answered by finding the maximum HDD and the minimum CDD. Then, just see what years these events occur on, which D identifies.
// (J) Detail Since the question says “approximately” we can round our values. For Dallas, HDD can be rounded up to 500 and CDD can be rounded up to 5000. Indicating that the CDD is 10x greater than the HDD.
// (A) Detail The five cities that have a latitude between 40 and 50 degrees are NY, Chicago, Boston, Minneapolis and Seattle. In each of these cities the HDD is always greater than 2500. It cannot be B because in Seattle the CDD is greater than the HDD.
// (F) New Information The bottom of Table 1 tells how the HDD and CDD are found. Either way, 65-65=0
// (A) Trend Table 1 increases by latitude as do each of the answer options, meaning we need to find a graph that matches the trend of the CDD as we move down the table. A has the first two points as being rather high, followed by a rather steep drop, which perfectly fits the relationship of Miami to Dallas to LA.
// (G) Trend If the slope of our line of best fit is decreasing, then that must indicate that the daily mean temperature was increasing because our HDD is found by subtracting Td from 65 degrees. In other words, each year the difference between the two values is growing smaller.

// Passage 4:
// (D) Detail Answer can be easily found by looking at which solution has the smallest bars in Figure 2.
// (J) Method Our control was the SS in NM solution, which can be seen in the first two sentences of the paragraph under experiment 2. This is also evident in the way that the percent survival didn’t really change no matter what the incubation time was.
// (C) Trend We can see that in Experiment 2 the percent survival of amoeba in lipids in NM solution is barely decreasing towards 80 at each incubation time period. We wouldn’t want to go with B because that would indicate the percent of death.
// (J) Method F, G, and H are all factors found in experiment 2, but not experiment 1 which compares percent survival to percent by volume of SS or human milk.
// (B) New Information If the only amoeba that are stained blue are dead ones. Then we need to take the percent survival of 10% human milk in NM and subtract that by 1000. In this case, 100-80=20. So 20 percent of amoeba would be stained blue.
// (J) New Information We know that Experiment 2 is the only experiment that deals with differing fractions of human milk so we can eliminate F and G. H would then be pointless because it would then introduce another human milk fraction by using non-casein proteins.
// (A) Outside information Remind the student that there are never more than 2 or 3 outside information questions. Amoeba are unicellular organisms that contain a nucleus.



// Passage 5:

// (F) Outside Information Charges of opposite sign attract each other, while charges of like sign repel each other.
// (B) Method / Outside Information Student 2 stated that the currents consisted of negative charges. This would then imply that they were electrons, because electrons have a negative charge.
// (F) Detail Student 2 states that “a magnetic field exerts a force on any charge in motion”. Therefore, we can eliminate G and J because those have particles that are at rest and not in motion. J cannot be correct because the particle must be charged, which means we must go with F due to ions being by definition a charged atom or molecule.
// (C) Detail Student 1 states that the current flow was upward in position X and downward in Position Y. So, we can eliminate A, B and D just based off of this information. This would then mean that they are also anti parallel since they are flowing in opposite directions.
// (F) Detail Even though he is incorrect, Student 3 states that charges of like sign attract each other. F is the only diagram that illustrates such a phenomenon.
// (A) Similarities and Differences Need to look in the middle of the second paragraph of both explanations. Student 1 says, “electric fields attract each other when parallel and repel each other when antiparallel.” Student 2 says, “When the currents were parallel, the field generated by one current attracted the charges in the other current.” In other words, student one talks about the attraction between field and field, and student two talks about attraction between field and charge.
// (G) New Information Remember that Student 2 talks about magnetic fields, which makes sense that we would want to use a compass because it can detect magnetic fields. H and J are irrelevant, and F can’t be correct because we are talking about magnetic fields, not just charged rods.

// Passage 6:

// (A) Detail A quick glance at Figure 2 makes it very clear that air density is decreasing only.
// (G) Trend The value of vapor pressure is not on the graph, but the relationship is clearly linear. By extending the line out to where it would intercept with the x-axis, we can see it must be more that 2,400, but is unlikely to reach all the way to 3,000. This leaves 2,700 as the only realistic option.
// (D) Detail the description before figure three tells us that compounds are being mixed into an aqueous solution (into water). If the percent of the compound in the water is zero, the liquid in the container would be pure H2O. Using figure 3, we can see that 0% mass of compound in the solution is equal to 100% (RH%).
// (G) Outside Info it is important for students to know that density = mass  /  volume. This means that since the volume is constant at 1L, the increased density at 1,000 Pa also means the mass is higher.
// (B) Detail  Need to use all three graphs. Use Figure three first to find the RH for 35% H2SO4. Then use that RH to find the H20 Pressure in Figure. Finally use that H20 Pressure to find the air density in figure 2.
// (J) Detail  need to use figures 1 and 3 to solve (indicated in the question). Figure 3 allows us to see that the RH% is higher for H2SO4 than for NaOH. We can then take this information to figure 1 to see that a higher RH% = a higher H2) vapor pressure (a positive linear relationship).

// `))


// FOR MATH SECTIONS
// console.log(`   
// (E) 
// (H) 
// (B) 
// (F) 
// (D) 
// (K) 
// (B) 
// (G) 
// (D) 
// (J) 
// (C) 
// (G) 
// (C) 
// (F) 
// (C) 
// (H) 
// (E) 
// (H) 
// (A) 
// (K) 
// (B) 
// (K) 
// (B) 
// (K) 
// (C) 
// (J) 
// (A) 
// (G) 
// (A) 
// (K)
// (A)
// (H)
// (A)
// (H)
// (D)
// (J)
// (D)
// (H)
// (C)
// (F)
// (D)
// (F)
// (E)
// (J)
// (D)
// (G)
// (D)
// (G)
// (C)
// (J)
// (D)
// (H)
// (C)
// (H)
// (E)
// (J)
// (E)
// (F)
// (E)
// (J)

// `.split('').filter(el => {
//     return ['A','B','C','D','E','F','G','H','J','K'].includes(el)
// }).map((el, i) => {
//     if(i < 21){
//         return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '1-20'] 
//     } else if(i < 41) {
//         return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '21-40']
//     } else { 
//         return [el.replace('F', 'A').replace('G', 'B').replace('H', 'C').replace('J', 'D').replace('K', 'E'), '41-60']
//     }
// }));

// console.log(` 6
// 146
// 2500
// 34
// 2.5 or 5/2 
// 6.25 or 25/4
// 293
// 9
// ` )

// FOR SCORE SCALES
/**
 * Takes a scorescale string and returns a scorescale array.
 * GO FROM 0 - 75 or REVERSE
 */
const scoreScale =`0 - 1 - 2 3 - 4 5 6 7 8 9 10 11 12-13 14-15 16 17-18 19-20 21 22-23 24 25-26 27 28 29 30 31 32 - 33 34 35 36 37-40`.replace( /\n/g, " " ).split( " " )
    .map(el => {
        if(el.length === 2){
            return [el];
        } else {
            return el.split('-')
        }
    });

const newScoreScale = []

scoreScale.forEach((el, i) => {
    console.log(el);
    if(el.includes('-')){
        console.log('skipped');
    } else if (el.length === 1) {
        newScoreScale.push(i+1)
    } else {
        let start = parseInt(el[0]);
        const end = parseInt(el[1]);
        while(end >= start){
            newScoreScale.push(i+1);
            start++
        }
    }
})

console.log(newScoreScale);

const score = [
    1, 3, 5, 6, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 16, 17, 17, 18, 19, 19, 20,
    20, 21, 22, 22, 23, 24, 24, 25, 26, 27,
    28, 29, 30, 32, 33, 34, 35, 36, 36, 36,
    36
]


 console.log(score.length)
