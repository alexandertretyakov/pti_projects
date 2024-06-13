const tasks = [
    {
        fixVersion: '178',
        labels: ['demo', 'RO', 'Casino']
    },
    {
        fixVersion: '178',
        labels: ['demo', 'CZ', 'Account']
    },
    {
        fixVersion: '178',
        labels: ['CZ', 'Account', 'Content_Affected']
    },
    {
        fixVersion: '179',
        labels: ['CZ', 'Casino']
    },
    {
        fixVersion: '179',
        labels: ['demo', 'RO', 'Account', 'Casino', 'Content_Affected']
    },
    {
        fixVersion: '179',
        labels: ['demo', 'RO', 'Account', 'Content_Affected']
    },
    {
        fixVersion: '180',
        labels: ['demo', 'CZ', 'Account']
    }
];

//search('178', ['CZ', 'Content_Affected']);

const search = function(fixVersion, labels) {
    if (arguments.length === 0) {
        return tasks;
    }

    labels = labels ?? [];

    return tasks
        .filter(function(t) {
            return t.fixVersion === fixVersion;
        })
        .filter(function(task, idx) {
            return labels.every((label) => task.labels.includes(label))
        });
};

//-------------------------------------------------------------------------------------------
//1-вариант
// var dfd1 = $.Deferred();
// var dfd2 = $.Deferred();
// var dfd3 = $.Deferred();
// var dfd4 = $.Deferred();
// var dfd5 = $.Deferred();
// var dfd6 = $.Deferred();
// var dfd7 = $.Deferred();
//
// document.querySelectorAll('button')[0].addEventListener('click', () => dfd1.resolve());
// document.querySelectorAll('button')[1].addEventListener('click', () => dfd2.resolve());
// document.querySelectorAll('button')[2].addEventListener('click', () => dfd3.resolve());
// document.querySelectorAll('button')[3].addEventListener('click', () => dfd4.resolve());
// document.querySelectorAll('button')[4].addEventListener('click', () => dfd5.resolve());
// document.querySelectorAll('button')[5].addEventListener('click', () => dfd6.resolve());
// document.querySelectorAll('button')[6].addEventListener('click', () => dfd7.resolve());
//
// $.when(dfd1, dfd2, dfd3, dfd4, dfd5, dfd6, dfd7)
//     .done(() => console.log('Все кнопки были нажаты'));
//2-вариант
var buttons = document.querySelectorAll('button');
var states = [].map.call(buttons, () => $.Deferred());

buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => states[idx].resolve());
});

$.when(...states)
    .done(() => console.log('Все кнопки были нажаты'));

