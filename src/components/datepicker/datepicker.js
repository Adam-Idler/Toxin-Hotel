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
        onSelect: function(dateText, inst, extensionRange) {
          $('.datepicker_mini_start').val(extensionRange.startDateText);
          $('.datepicker_mini_end').val(extensionRange.endDateText);
        }
    });

    $('.datepicker_mini_end').on('click', () => {
        $('.datepicker_mini_start').datepicker('show');
    });
    
};