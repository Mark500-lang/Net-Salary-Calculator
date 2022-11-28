function salarycalculator(){

//creating variables to store basic salary and benefits 
const a = document.getElementById('numBasicSalary').value;
const b = document.getElementById('numTotalBenefits').value;
var grossPay = a - ( - b );
const nssf = 400;
const paye = '';
const nhif = '';

//switch case with ternary expressions to calculate PAYE amount
switch (
    (grossPay > 0 && grossPay <= 24,000) ? 1 : 
    (grossPay >= 24.001 && grossPay <= 32,333) ? 2 : 0

)

    {
            case 1 :paye = '(grossPay * .1)';break;
            case 2 :paye = '(grossPay * .25)';break;
            case 0 :paye = '(grossPay * .3)';break;
    }

//switch case with ternary expressions to calculate NHIF amount
switch(
    (grossPay > 0 && grossPay <= 5999) ? 1 : 
    (grossPay >= 6000 && grossPay <= 7999) ? 2 : 
    (grossPay >= 8000 && grossPay <= 11999) ? 3 : 
    (grossPay >= 12000 && grossPay <= 14999) ? 4 : 
    (grossPay >= 15000 && grossPay <= 19999) ? 5 : 
    (grossPay >= 20000 && grossPay <= 24999) ? 6 : 
    (grossPay >= 25000 && grossPay <= 29999) ? 7 : 
    (grossPay >= 30000 && grossPay <= 34999) ? 8 : 
    (grossPay >= 35000 && grossPay <= 39999) ? 9 : 
    (grossPay >= 40000 && grossPay <= 44999) ? 10 : 
    (grossPay >= 45000 && grossPay <= 49999) ? 11 : 
    (grossPay >= 50000 && grossPay <= 59999) ? 12 : 
    (grossPay >= 60000 && grossPay <= 69999) ? 13 : 
    (grossPay >= 70000 && grossPay <= 79999) ? 14 : 
    (grossPay >= 80000 && grossPay <= 89999) ? 15 : 
    (grossPay >= 90000 && grossPay <= 99999) ? 16 : 0

)

    {
            case 1 :nhif = '150';break;
            case 2 :nhif = '300';break;
            case 3 :nhif = '400';break;
            case 4 :nhif = '500';break;
            case 5 :nhif = '600';break;
            case 6 :nhif = '750';break;
            case 7 :nhif = '850';break;
            case 8 :nhif = '900';break;
            case 9 :nhif = '950';break;
            case 10 :nhif = '1,000';break;
            case 11 :nhif = '1,100';break;
            case 12 :nhif = '1,200';break;
            case 13 :nhif = '1,300';break;
            case 14 :nhif = '1,400';break;
            case 15 :nhif = '1,500';break;
            case 16 :nhif = '1600';break;
            case 0 :nhif = '1,700';break;
    
}
//calculatin net salary
const netSalary = (((grossPay - paye) - nhif) - nssf);

//displaying the results
document.getElementById('numPayee').value = paye;
document.getElementById('numNhif').value = nhif;
document.getElementById('numNssf').value = nssf;
document.getElementById('numNetSalary').value = netSalary;

}