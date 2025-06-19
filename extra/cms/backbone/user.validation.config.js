define(function(require, exports, module) {
    'use strict';

    var userValidationConfig = require('modules/user/licensee-account/user.validation.config');
    var _ = require('underscore');

    module.exports = function() {
        var originalConfig = userValidationConfig();

        return _.extend({}, originalConfig, {
            stField1: {
                required: {
                    message: 'Обязательно'
                },
                length: {
                    min: 5,
                    max: 10,
                    message: 'От 5 до 10'
                },
                regexp: {
                    regexp: /^[a-zA-Z]{1,}$/,
                    message: 'Только буквы латинского алфавита'
                }
            },
            stField2: {
                length: {
                    min: 4,
                    max: 8,
                    message: 'От 4 до 8'
                },
                regexp: {
                    regexp: /^\d+$/,
                    message: 'Только цифры'
                }
            },
            stField3: {
                regexp: {
                    regexp: /^[a-zA-Z\d]{1,}$/,
                    message: 'Только буквы латинского алфавита и цифры'
                }
            },
            stField4: {
                regexp: {
                    regexp: /^\S{1,}$/,
                    message: 'Не должно быть пробельных символов'
                }
            },
            stField5: {
                regexp: {
                    regexp: /^[^DROCH]+$/,
                    message: 'Не должно быть букв D R O C H'
                }
            },
            stField6: {
                regexp: {
                    regexp: /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
                    message: 'Строка в формате 3333-4444-1111-2222'
                }
            },
            stField7: {
                regexp: {
                    regexp: /^[0-9]{2}:[0-9]{2}$/,
                    message: 'Строка в формате 23:12 (99:99 тоже норм)'
                }
            },
            stField8: {
                regexp: {
                    regexp: /^[0-9]{1,}$/,
                    message: 'От одной до бесконечности цифр'
                }
            },
            stField9: {
                regexp: {
                    regexp: /^8{1,}$/,
                    message: 'От одной до бесконечности цифры 8'
                }
            },
            stField10: {
                regexp: {
                    regexp: /^([0-9]{1,})|([a-zA-Z]{1,})$/,
                    message: 'Можно только или буквы латинского алфавита или только цифры'
                }
            },
            stField11: {
                regexp: {
                    regexp: /^[a-z]{1,}$/i,
                    message: 'Можно только буквы латинского алфавита любого регистра'
                }
            },
            stUsername: {
                required: {
                    message: 'Required'
                }
            },
            stPassword: {
                required: {
                    message: 'Required'
                }
            }
        });
    };
});
