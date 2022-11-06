$(function () {
    $('[data-number-input]').each(function () {
        var $this = $(this);
        if ($this.find('input[name="adults"]').length > 0) {
            $this.numberInput({
                minValue: 1,
                maxValue: 5,
            });
        } else {
            $this.numberInput({
                minValue: 1,
                maxValue: 5,
            });
        }
    });
});

$.fn.numberInput = function(options) {
    var defaultOptions = {
        minValue: false,
        maxValue: false,
    };
    options = $.extend(defaultOptions, options);
    if (options.minValue !== false && options.maxValue !== false && options.minValue >= options.maxValue) {
        options.minValue = false;
        options.maxValue = false;
    }
    this.each(function () {
        var $container = $(this);
        var $input = $container.find('input');
        var value;

        function _setValueInRange(val) {
            if (options.maxValue !== false && val > options.maxValue) {
                val = options.maxValue
            }
            if (options.minValue !== false && val < options.minValue) {
                val = options.minValue
            }
            return val;
        }
        function _valueIncrement() {
            value = _setValueInRange(value + 1);
            $input.val(value);
        }
        function _valueDecrement() {
            value = _setValueInRange(value - 1);
            $input.val(value);
        }
        function _checkInput() {
            var inputVal = $input.val();
            inputVal = parseFloat(inputVal);
            if (!$.isNumeric(inputVal)) {
                inputVal = 0;
            }
            value = _setValueInRange(inputVal);
            $input.val(value);
        }

        function _init() {
            _checkInput();

            $container.on('click', '[data-number-input-control]', function () {
                if ($input.prop('disabled')) {
                    return;
                }
                switch ($(this).attr('data-number-input-control')) {
                    case 'minus':
                        _valueDecrement();
                        break;
                    case 'plus':
                        _valueIncrement();
                        break;
                }
            });
            $input.on('change', function () {
                _checkInput();
            });
            $input.on('keydown', function(e){
                switch (e.keyCode) {
                    case 38:
                        _valueIncrement();
                        break;
                    case 40:
                        _valueDecrement();
                        break;
                }
            });
        }

        _init();
    })
};