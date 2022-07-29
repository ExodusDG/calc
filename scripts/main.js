var perWeek = document.getElementById('sliderPerWeek');
var perYear = document.getElementById('sliderPerYear');
var unpaid = document.getElementById('sliderUnpaid');
var salary = document.getElementById('sliderSalary');

var formatForSlider = {
    from: function (formattedValue) {
        return Number(formattedValue);
    },
    to: function (numericValue) {
        return Math.round(numericValue);
    }
};

var formatForSlider_2 = {
    from: function (formattedValue) {
        return Number(formattedValue);
    },
    to: function (numericValue) {
        return numericValue.toFixed(1);
    }
};



/* WEEK SLIDER */

noUiSlider.create(perWeek, {
    start: 37.5,
    connect: [true, false],
    step: 0.5,
    format: formatForSlider,
    range: {
        min: 0,
        max: 50
    }
});
var perWeekValueElement = document.getElementById('perWeekValue');

perWeek.noUiSlider.on('update', function (values, handle) {
    perWeekValueElement.innerHTML = values[handle];

    sliderCalculate()
});

/* YEAR SLIDER */

noUiSlider.create(perYear, {
    start: 48,
    connect: [true, false],
    step: 1,
    format: formatForSlider,
    range: {
        min: 0,
        max: 52
    }
});

var perYearValueElement = document.getElementById('perYearValue');

perYear.noUiSlider.on('update', function (values, handle) {
    perYearValueElement.innerHTML = values[handle];

    sliderCalculate()
});


/* UNPAID SLIDER */

noUiSlider.create(unpaid, {
    start: 10,
    connect: [true, false],
    step: 0.5,
    format: formatForSlider_2,
    range: {
        min: 0,
        max: 20
    }
});

var perUnpaidValueElement = document.getElementById('perUnpaidValue');

unpaid.noUiSlider.on('update', function (values, handle) {
    perUnpaidValueElement.innerHTML = values[handle];

    sliderCalculate()
});

/* SALARY SLIDER */

noUiSlider.create(salary, {
    start: 25000,
    step: 500,
    format: formatForSlider,
    connect: [true, false],
    range: {
        min: 0,
        max: 250000
    }
});


var perSalaryValueElement = document.getElementById('perSalaryValue');

salary.noUiSlider.on('update', function (values, handle) {
    perSalaryValueElement.innerHTML = values[handle];

    sliderCalculate()
});

var hoursPerWeekValue;
var weeksValue;
var unpaidValue;
var salaryValue = Number($('#annualSalaryNumber').val());

function sliderCalculate() {
    hoursPerWeekValue = Number($('#perWeekValue').text());
    weeksValue = 52;
    unpaidValue = Number($('#perUnpaidValue').text());
    salaryValue = Number($('#annualSalaryNumber').val());

    var valueA = (salaryValue / (weeksValue * hoursPerWeekValue)) * unpaidValue;
    $('#unpaidOvertime').text(valueA.toFixed(1))

    var valueB = valueA * 46.4;
    $('#weekValue').text(valueB.toFixed(1))

    var valueC = salaryValue / (weeksValue * hoursPerWeekValue);
    $('#parametrValue').text(valueC.toFixed(1))
}