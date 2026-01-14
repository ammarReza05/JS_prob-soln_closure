# JS_prob-soln_closure

   1:
Quiz App ka Structure aur Closure-based Question,Har question ka apna private state ho, jaise ki,kya attempt kiya gaya,sahi ya galat tha,score kya mila.Aur yeh sab closures se handle ho ,bina kisi class ya global variable ke.
//kaise banaya::
Ek function createQuestion(question, correctAnswer) jo Apna internal state rakhta hai (attempt, score, correct/wrong) ,Har question ek closure object ban jata hai jisme doosre question ka state interfere nahi karta.

2: Caching Function,Kisi answer ko baar-baar evaluate na karein agar woh pehle hi evaluate ho chuka ho.function ke result ko memory me cache karta hai.Agar same input dubara aaye, to direct cache se answer deta hai.Memory efficient hai (max cache size limit hoti hai). Yeh system check() ke andar answer verification ko fast aur efficient banata hai.

3:Chainable api:Isse multiple methods ko ek chain me call kar sakte ho.
