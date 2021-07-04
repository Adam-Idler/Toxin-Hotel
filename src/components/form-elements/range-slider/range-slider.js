export const rangeSliderActivate = () => {

    const formateValue = (val) => {
        let str = '',
            valLength = val.toString().length - 1;

        for (let i = 0; i <= valLength; i++) {
            if (i % 3 == 0 && i != 0)
                str += ' ' + val.toString()[valLength - i];
            else 
                str += val.toString()[valLength - i];
        }

        return [...str].reverse().join("");
    };

    $('.range-slider').slider({
        animate: "slow",
        range: true,
        min: 0,
        max: 16000, 
        values: [ 5000, 10000 ],
        slide : function(event, ui) { 
            $( ".range-slider__result" ).text( `${formateValue(ui.values[0])}₽ - ${formateValue(ui.values[1])}₽` );        
        }
    });

    $( ".range-slider__result" ).text( `${formateValue($(".range-slider").slider("values", 0))}₽ - ${formateValue($(".range-slider").slider("values", 1))}₽` );
};