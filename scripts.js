$("#cardNumber").change(function(){
    let cardInput=$("#cardNumber").val();
    let visa=$("#cc-visa");
    let amex=$("#cc-amex");
    let discover=$("#cc-discover")
    let mastercard=$("#cc-masterCard")
    if(cardInput=="4"){
        visa.css({"color":"green"})
        amex.css({"color":"black"})
        discover.css({"color":"black"})
        mastercard.css({"color":"black"})
    } 
    else if(cardInput=="34" || cardInput=="37"){
        amex.css({"color":"green"})
        visa.css({"color":"black"})
        discover.css({"color":"black"})
        mastercard.css({"color":"black"})
    }
    else if(cardInput=="51" || cardInput=="52" || cardInput=="53" || cardInput=="54" || cardInput=="55" ){
        amex.css({"color":"black"})
        visa.css({"color":"black"})
        discover.css({"color":"black"})
        mastercard.css({"color":"green"})
    } else {
        amex.css({"color":"black"})
        visa.css({"color":"black"})
        discover.css({"color":"green"})
        mastercard.css({"color":"black"})
    }
    
})