export const surveyJSON = {
  "locale": "ru",
  "title": "Опросник для H2Valley",
  "description": "Сбор данных для формирования предложения по созданию сайта",
  "logo": {
    "ru": "https://api.surveyjs.io/private/Surveys/files?name=5eff38d4-1257-415a-bbb9-d915554b866f"
  },
  "logoWidth": "200",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "checkbox",
          "name": "question1",
          "title": {
            "ru": "Какова основная цель создания нового сайта?"
          },
          "isRequired": true,
          "choices": [
            "Размещение ключевой информации о компании (чем занимается, описание бизнес-процессов)",
            "Поиск клиентов, увеличение продаж",
            "Поддержка клиентов",
            "Информация о команде - продвижение отдельных личностей",
            "Информационное наполнение - новости об индустрии, новости компании"
          ],
          "showOtherItem": true,
          "showSelectAllItem": true,
          "minSelectedChoices": 1
        },
        {
          "type": "checkbox",
          "name": "question2",
          "title": {
            "ru": "Какие ключевые сообщения и идеи вы хотите донести через сайт?"
          },
          "isRequired": true,
          "choices": [
            "Инновации",
            "Надежность",
            "Опыт",
            "Экологичность",
            "Технологическое лидерство"
          ],
          "showOtherItem": true,
          "minSelectedChoices": 1
        },
        {
          "type": "multipletext",
          "name": "question3",
          "title": {
            "ru": "Какая ваша целевая аудитория?"
          },
          "isRequired": true,
          "items": [
            {
              "name": "text1",
              "title": {
                "ru": "Возраст: "
              }
            },
            {
              "name": "text2",
              "title": {
                "ru": "Пол"
              }
            },
            {
              "name": "text3",
              "title": {
                "ru": "Профессиональная сфера"
              }
            },
            {
              "name": "text4",
              "title": {
                "ru": "Интересы"
              }
            },
            {
              "name": "text5",
              "title": {
                "ru": "Уровень дохода"
              }
            },
            {
              "name": "text6",
              "title": {
                "ru": "Географическое расположение"
              }
            },
            {
              "name": "text7",
              "title": {
                "ru": "Другое"
              }
            }
          ]
        },
        {
          "type": "checkbox",
          "name": "question4",
          "title": {
            "ru": "Что является основными конкурентными преимуществами вашего бизнеса?"
          },
          "isRequired": true,
          "choices": [
            {
              "value": "Уникальные технологии или разработки",
              "text": {
                "ru": "Уникальные технологии или разработки"
              }
            },
            {
              "value": "Высококвалифицированная команда специалистов",
              "text": {
                "ru": "Высококвалифицированная команда специалистов"
              }
            },
            "Индивидуальный подход к клиентам",
            "Эффективность и надежность решений",
            "Инновационность и постоянное развитие",
            "Конкурентоспособные цены"
          ],
          "showOtherItem": true
        }
      ]
    },
    {
      "name": "page2",
      "title": {
        "ru": "Дизайн и контент"
      },
      "elements": [
        {
          "type": "text",
          "name": "question5",
          "title": {
            "ru": "Какие примеры сайтов вам нравятся?"
          },
          "description": {
            "ru": "(Введите примеры сайтов, которые вам нравятся, с кратким описанием того, что именно привлекает ваше внимание)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question6",
          "title": {
            "ru": "Какие элементы дизайна для вас важны?\n"
          },
          "description": {
            "ru": "(Цвета, шрифты, изображения, минимализм, анимации.)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question7",
          "title": {
            "ru": "Какой стиль фотографий и графики вам предпочтителен?"
          },
          "description": {
            "ru": "(Реалистичные, иллюстрации, 3D-элементы.)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question8",
          "title": {
            "ru": "Насколько важна анимация на сайте?"
          },
          "description": {
            "ru": "(Где должна использоваться: на переходах, в баннерах, в элементах интерфейса?)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question9",
          "title": {
            "ru": "Какую цветовую палитру вы предпочитаете для сайта?"
          },
          "description": {
            "ru": "(Можно указать конкретные цвета или общий тон: светлый, темный, яркий, нейтральный.)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question10",
          "title": {
            "ru": "Какие шрифты вы хотите использовать?"
          },
          "description": {
            "ru": "(Укажите предпочтения или оставьте выбор нам)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question11",
          "title": {
            "ru": "Какие изображения вы планируете использовать на сайте?"
          },
          "description": {
            "ru": "(Собственные фотографии, стоковые изображения, иллюстрации, AI generated и т.д.  )"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question12",
          "title": {
            "ru": "Планируете ли вы использовать видео-контент на сайте?"
          },
          "description": {
            "ru": "(Да/Нет. Если да, какие типы видео: обзоры, интервью, анимации.)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question13",
          "title": {
            "ru": "Будет ли на сайте мультиязычная поддержка?"
          },
          "description": {
            "ru": "(Если да, на каких языках сайт должен быть доступен?)"
          },
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question14",
          "title": {
            "ru": "Есть ли конкретные ограничения по дизайну или стилю, которых нужно придерживаться?"
          },
          "description": {
            "ru": "(Например, фирменные цвета или логотип.)"
          },
          "isRequired": true
        }
      ]
    },
    {
      "name": "page3",
      "title": {
        "ru": "Структура сайта"
      },
      "elements": [
        {
          "type": "checkbox",
          "name": "question15",
          "title": {
            "ru": "Какие разделы или страницы обязательно должны быть на сайте?"
          },
          "isRequired": true,
          "choices": [
            "О компании",
            "Услуги/Продукты",
            "Контакты",
            "Блог/Новости",
            "Портфолио/Проекты",
            "Команда",
            "Отзывы клиентов",
            "FAQ (Часто задаваемые вопросы)",
            "Карьера/Вакансии",
            "Партнеры"
          ],
          "showOtherItem": true,
          "showSelectAllItem": true
        },
        {
          "type": "boolean",
          "name": "question16",
          "title": {
            "ru": "Нужен ли раздел с кейсами?"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "checkbox",
          "name": "question17",
          "title": {
            "ru": "Какие типы контента будут публиковаться на сайте?"
          },
          "isRequired": true,
          "choices": [
            "Статьи",
            "Новости",
            "Видео",
            "Галереи изображений",
            "Инфографика",
            "Подкасты",
            "Интерактивные презентации",
            "Вебинары и онлайн-семинары"
          ],
          "showOtherItem": true
        },
        {
          "type": "boolean",
          "name": "question18",
          "title": {
            "ru": "Нужно ли интегрировать формы для захвата лидов (подписка на рассылку, обратная связь)?"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "boolean",
          "name": "question19",
          "title": {
            "ru": "Будут ли на сайте специальные предложения, акции или скидки?"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "boolean",
          "name": "question20",
          "title": {
            "ru": "Планируется ли создание интерактивных карт или других интерактивных элементов?"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "checkbox",
          "name": "question21",
          "title": {
            "ru": "Как вы видите навигацию по сайту?"
          },
          "choices": [
            "Одноуровневая (все разделы на одном уровне)",
            "Многоуровневая (основные разделы с подразделами)",
            "Горизонтальная (меню в верхней части страницы)",
            "Вертикальная (боковое меню)",
            "Комбинированная (сочетание горизонтального и вертикального меню)",
            "Мега-меню (расширенное меню с подкатегориями)",
            "Гамбургер-меню (скрытое меню для мобильных устройств)"
          ],
          "showOtherItem": true,
          "minSelectedChoices": 1
        }
      ]
    },
    {
      "name": "page4",
      "title": {
        "ru": "Технические требования"
      },
      "elements": [
        {
          "type": "checkbox",
          "name": "question22",
          "title": {
            "ru": "Будет ли на сайте личный кабинет пользователя?"
          },
          "description": {
            "ru": "Комментарий: зависит от выбранной вами бизнес-модели, можно предусмотреть точки, которые впоследствии будут использованы для создания личного кабинета, чтобы не крошить систему сайта и вшивать сторонние вещи впоследствии. "
          },
          "isRequired": true,
          "choices": [
            "Управление личными данными",
            "Система уведомлений",
            "Чат с поддержкой",
            "Управление подписками",
            "Доступ к специальным предложениям"
          ],
          "showOtherItem": true,
          "showNoneItem": true
        },
        {
          "type": "boolean",
          "name": "question23",
          "title": {
            "ru": "Нужно ли интегрировать CRM-систему или другие внутренние системы?"
          },
          "description": {
            "ru": "Комментарий: есть ли на данный момент или планируется ли внедрение системы управления коммуникацией с клиентом на всех его стадиях для контроля стадий"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "checkbox",
          "name": "question24",
          "title": {
            "ru": "Какие социальные сети вы планируете интегрировать с сайтом?"
          },
          "isRequired": true,
          "choices": [
            "Instagram",
            "Facebook",
            "LinkedIn",
            "Twitter/X",
            "YouTube",
            "TikTok",
            "Pinterest",
            "Telegram",
            "WhatsApp",
            "VKontakte (ВКонтакте)"
          ],
          "showOtherItem": true,
          "showNoneItem": true
        },
        {
          "type": "boolean",
          "name": "question25",
          "title": {
            "ru": "Будет ли поддержка чат-ботов или других автоматизированных систем взаимодействия с пользователями?"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "boolean",
          "name": "question26",
          "title": {
            "ru": "Планируется ли интеграция с внешними платформами для размещения объявлений или рекламы?"
          },
          "isRequired": true,
          "swapOrder": true
        },
        {
          "type": "checkbox",
          "name": "question27",
          "title": {
            "ru": "Какие инструменты аналитики и мониторинга вы хотите использовать?"
          },
          "description": {
            "ru": "Комментарий: если вы не имеете предпочтений, мы предложим оптимальные решения и сделаем настройку систем"
          },
          "isRequired": true,
          "choices": [
            "Google Analytics",
            "Яндекс.Метрика",
            "Hotjar",
            "Mixpanel",
            "Amplitude",
            "Segment",
            "Piwik PRO",
            "Matomo",
            "Looker"
          ],
          "showOtherItem": true,
          "showNoneItem": true
        }
      ]
    }
  ]
}
