
const testString = `

Section 3: Reading

Section 4: Science
Table describes three phases of a muscle twitch. Figure 1 shows the force in Newtons (N) of a muscle twitch over time in seconds.
(B) Detail- from ~0-87 increasing, after ~87 decreasing. Answer b only answer that includes before and after 87.
(F) Inference- latent:~0-2.5 seconds, contraction: ~2.5-87 seconds, relaxation: ~87-250 seconds by using data on graph one and the zoom in for latent 
(B) Inference- The maximum of the curve is ~90 seconds after initial twitch time
(G) New Information- The max is ~7.5 N, thus twice would be ~15N
(C) Detail- notice wording “before” or “after”. If student picked A, reading too fast 
()
(P)assage #2 
()
()
(G) Detail- looking at dotted line in figure 2 where 03 is zero. The range is above 18 and below 22 so G is correct.
(B) Detail- September is bold line, has a max 03 at 7. November is dashed line, has a max 03 at 20.
(J) Inference- at about 25km, the lines all converge. Thus, there is very minimal variation in air temp at 25km.
(A) Inference- passage says 03 content decreases from August and reaches a low around October 15. October 1 would thus have more 03 than the amount graphed on October 15 (.5mpa). However, it wouldn’t be drastically larger (over 3.5 mpa difference), so answer A makes most sense.
(H) Inference/Outside Info- Can eliminate F and G because they are not true based off figure 2 data. Must be able to infer less 03 in stratosphere means less interference of ultraviolet radiation rays coming in. Thus, H correct because greater UV ray intensity will result from less 03.
()
(P)assage #3
()
(C) Detail- only student 4 describes the beaker initially containing only a liquid. The other three say there was a solute mixed in as well. 
(J) Outside Info/Detail- he said the liquid evaporated. Must know evaporation is the term used to describe the state change from liquid to gas. 
(A) Detail/Outside info- teacher describes solid floating, thus density is less than the liquid. 
(G) Detail- student 1 and 4 both describe the beaker containing a “pure green solvent”
(D) Detail- As previously mentioned, student 1 describes a beaker containing a “pure green solvent” while student three describes the solvent only turning green after the solute (solid) is dissolved in the solvent. 
(J) New Information- students 1-3 say the exact same thing. Student 4 only one who doesn’t mention a solid concentration increasing or a liquid concentration decreasing (evaporating)
(B) New Information- student two describes a green colored solute-solvent complex (SSC) as a result of mixing a white solid with a colorless liquid.  
()
(P)assage #4
()
(J) Detail- Experiment 2 graph shows group 7 and 8 with largest decrease after 1 day of exposure. The following days have little to no drop. 
(B) Detail- dosage is group 2-8 in table 1. On figure 2, for the 10th day after exposure, the graph shows a decreasing percent of survival from group 2-8. 
(F) Detail/Inference- In figure 1, looking at lined bars (FT) which correspond to UV-B exposure. Only H. regilla species had over 95% hatched (less than 5% mortality).
(B) Detail- Figure 3, H. regilla bar larger than B. boreas bar, which indicates higher rate of CBPD removal.
(G) New information- want to subtract to find the difference between filter and no filter eggs
(A) New information- FB blocked UVB, FT transmitted UVB. A is only correct description of experiment 1 data. 
()
(P)assage #5 
()
(F) Detail- RH (relative humidity) is the measure of moisture content in air. Tank 1 has lowest RH. 
(C) New Information- We have data for aqueous tension where RH is 96 and 75. For KCl, RH is between 96 and 75 so aqueous tension is between 110 and 140.
(G) New Information- From experiments 1-3 temp is increasing, so analyzing if salts 3,4,and 5 have decreasing RH over experiments 1-3. 
(D) New Information- between experiments 2 and 3, only tank 2 and 5 have the same RH but neither have the same aqueous tension, thus can eliminate A and B. C is just incorrect- tank 2 and 3 are not the same.
(F) Inference- first procedure is “a drying agent was placed in each tank”. F is only answer that logically explains why.
(D) Outside Info/Inference- Scientists change an independent variable to measure the results of the dependent variable that is dependent on the independent variable being changed.
()
(P)assage #6
()
(J) Detail- lowest density is ethanol so should be first in list which eliminates all choices except J.
(C) Inference- Figure shows trend that density and Pl are directly proportional. Thus, if D is kept constant, then Pl will be twice as large for Carbon tetrachloride than ethanol since its density is twice as large.
(H) trend
(A) method
(H) trend
()
(P)assage #7
(C) detail
(G) method
(C) trend
(H) detail
(A) method
(F) trend



`

function parseDebrief(debrief){
    splitDebrief = debrief.replace( /\n/g, " " ).replace("  ", " ").split( " " )
    console.log(splitDebrief)
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

scale = [
    [ 'B', 'backsolve:' ],
            [ 'D', 'simplify:' ],
            [ 'C', 'backsolve:' ],
            [ 'B', 'simplify:' ],
            [ 'E', 'backsolve:' ],
            [ 'B', 'simplify:' ],
            [ 'C', 'simplify/eliminate:' ],
            [ 'E', 'pick smart numbers' ],
            [ 'C', 'elimination:' ],
            [ 'C', 'elimination:' ],
            [ 'A', 'elimination/simplify:' ],
            [ 'E', 'simplify:' ],
            [ 'C', 'eliminate/simplify:' ],
            [ 'B', 'simplify:' ],
            [ 'C', 'simplify/eliminate:' ],
            [ 'E', 'pick smart numbers' ],
            [ 'D', 'simplify:' ],
            [ 'B', 'simplify:' ],
            [ 'D', 'simplify:' ],
            [ 'A', 'simplify:' ],
            [ 'A', 'eliminate:' ],
            [ 'E', 'use proportions' ],
            [ 'D', 'eliminate/use' ],
            [ 'C', 'simplify:' ],
            [ 'E', 'simplify/eliminate:' ],
            [ 'B', 'simplify:' ],
            [ 'C', 'simplify:' ],
            [ 'E', 'simplify:' ],
            [ 'C', 'pick smart numbers' ],
            [ 'D', 'elimination:' ],
            [ 'C', 'elimination:' ],
            [ 'A', 'eliminate:' ],
            [ 'E', 'eliminate/simplify:' ],
            [ 'A', 'elimination:' ],
            [ 'C', 'use proportions' ],
            [ 'B', 'simplify:' ],
            [ 'B', 'eliminate:' ],
            [ 'B', 'simplify:' ],
            [ 'E', 'simplify:' ],
            [ 'D', 'simplify:' ],
            [ 'C', 'simplify:' ],
            [ 'A', 'simplify/elimination:' ],
            [ 'E', 'simplify:' ],
            [ 'C', 'backsolve:' ],
            [ 'A', 'simplify:' ],
            [ 'D', 'simplify:' ],
            [ 'D', 'pick smart numbers' ],
            [ 'B', 'elimination:' ],
            [ 'A', 'simpliy/backsolve:' ],
            [ 'B', 'simplify:' ],
            [ 'A', 'simplify:' ],
            [ 'D', 'backsolve/simplify:' ],
            [ 'D', 'simplify:' ],
            [ 'E', 'eliminate:' ],
            [ 'A', 'pick smart numbers' ],
            [ 'E', 'simplify:' ],
            [ 'D', 'elimination:' ],
            [ 'D', 'simplify:' ],
            [ 'A', 'elimination:' ],
            [ 'E', 'simplify:' ]
  ]

for (i = 0; i< scale.length; i++){
    if(i < 21){
        scale[i][1] = "1-20"
    } else if (i < 41){
        scale[i][1] = "21-40"
    } else {
        scale[i][1] = "41-60"
    }
    console.log(scale[i])
}

