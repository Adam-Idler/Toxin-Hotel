export const datepickerActivate = () => {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $.datepicker._selectDateOverload = $.datepicker._selectDate;
    $.datepicker._selectDate = function(id, dateStr) {
        var target = $(id);
        var inst = this._getInst(target[0]);
        inst.inline = true;
        $.datepicker._selectDateOverload(id, dateStr);
        inst.inline = false;
        this._updateDatepicker(inst);
    }

    $('.datepicker_standart').datepicker({
        showButtonPanel: true,
        showOtherMonths: true,
        currentText: 'Очистить',
        closeText: 'Применить',
        gotoCurrent: true,
        defaultDate: '+0d',
        onSelect: function() {
            $(this).data('datepicker').inline = true;                               
        },
        onClose: function() {
            $(this).data('datepicker').inline = false;
        }
    });

    $('.datepicker_mini_start').datepicker({
        range: 'period',
        showButtonPanel: true,
        showOtherMonths: true,
        currentText: 'Очистить',
        closeText: 'Применить',
        gotoCurrent: true,
        defaultDate: '+0d',
        beforeShow: function(input) {
            $.datepicker._clearDate(input);
            $( input ).datepicker( "setDate", "");
        },
        onSelect: function(dateText, inst, extensionRange) {
            $('.datepicker_mini_start').val(extensionRange.startDateText);
            $('.datepicker_mini_end').val(extensionRange.endDateText);
        }
    });

    $('.datepicker_mini_end').on('click', () => {
        $('.datepicker_mini_start').datepicker('show');
    });

    $('.datepicker_filter').datepicker({
        range: 'period',
        showButtonPanel: true,
        showOtherMonths: true,
        currentText: 'Очистить',
        closeText: 'Применить',
        gotoCurrent: true,
        defaultDate: '+0d',
        beforeShow: function(input) {
            $.datepicker._clearDate(input);
            $( input ).datepicker( "setDate", "");
        },
        onSelect: function(dateText, inst, extensionRange) {
            if (!extensionRange.startDateText && !extensionRange.endDateText) return;

            let startDateArr = extensionRange.startDateText.split('.'),
                endDateArr = extensionRange.endDateText.split('.');

            let startMonth = startDateArr[1].replace('0', '') - 1,
                endMonth = endDateArr[1].replace('0', '') - 1;
            
            let formatedStartMonth = $.datepicker.regional['ru'].monthNamesShort[startMonth].toLowerCase(),
                formatedEndMonth = $.datepicker.regional['ru'].monthNamesShort[endMonth].toLowerCase();

            $('.datepicker_filter').val(`${startDateArr[0] + ' ' + formatedStartMonth} - ${endDateArr[0] + ' ' + formatedEndMonth}`);
        }
    });

    let datepickerID;
    $(window).on('click', (e) => {
        let target = e.target;

        if (!target.classList.contains('ui-datepicker-current') &&
            !target.classList.contains('hasDatepicker')
        ) return;

        if (target.classList.contains('hasDatepicker')) {
            datepickerID = target.id;
        }

        if (target.classList.contains('ui-datepicker-current')) {
            $.datepicker._clearDate('#' + datepickerID);
            $( '#' + datepickerID ).datepicker( "setDate", "");
        }
    });
};