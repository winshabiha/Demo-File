document.getElementById('deposit').addEventListener('click',function(){
    const depositInput = document.getElementById('depositIn')
    const depositInputValue = depositInput.value; 
    const depositInputValueNumber = parseInt(depositInputValue)

    const depositParagraph = document.getElementById('depositParagraph')
    const depositParagraphInnerText = depositParagraph.innerText;
    const depositParagraphNumber = parseInt(depositParagraphInnerText)
    const result = depositInputValueNumber + depositParagraphNumber
    depositParagraph.innerText = result

    const totalParagraph = document.getElementById('totalParagraph')
    const totalParagraphInnerText = totalParagraph.innerText;
    const totalParagraphInnerTextNumber = parseInt(totalParagraphInnerText)

    const totalAmount = depositInputValueNumber + totalParagraphInnerTextNumber 
    totalParagraph.innerText = totalAmount 
})