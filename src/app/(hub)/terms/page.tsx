import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function Page() {
  return (
    <div className='max-w-screen-md mx-auto overflow-hidden post'>
      <Typography variant='h1' className='mb-8'>
        Пользовательское соглашение
      </Typography>

      <Typography>
        До того, как Вы начнете пользоваться сайтом{' '}
        <a href='https://hub.novo-studio.ru/' target='_blank'>
          https://hub.novo-studio.ru/
        </a>{' '}
        (далее — «Сайт»), сервисами и возможностями, представленными на нем, просим Вас внимательно
        ознакомиться с настоящим документом. Используя любые функции, сервисы и возможности Сайта, в
        том числе просто просматривая страницы Сайта, Вы — пользователь (далее — «Пользователь») —
        независимо от того, покупали ли Вы элементы Библиотеки, зарегистрировались ли Вы на Сайте
        или посещаете его без регистрации, заявляете, что прочитали, поняли и согласны соблюдать
        настоящее пользовательское соглашение (далее — «Соглашение») и Договор оферты, расположенный
        по адресу{' '}
        <a href='https://hub.novo-studio.ru/offer' target='_blank'>
          https://hub.novo-studio.ru/offer
        </a>
      </Typography>

      <Typography variant='h2'>Термины и определения</Typography>

      <Typography>
        Сайт — программный комплекс, расположенный по адресу svoemedia.space, включая вложенные
        страницы.
      </Typography>
      <Typography>
        Администратор Сайта — Самозанятая Зайцева Алина Анатольевна ИНН 181001956299.
      </Typography>
      <Typography>
        Библиотека (hub.novo-studio, База, Хаб) — база данных с Блоками, Элементами, Шаблонами,
        Инструкциями, Обучающими материалами.
      </Typography>
      <Typography>Аккаунт — учетная запись Пользователя в Библиотеке.</Typography>
      <Typography>
        Личный кабинет — раздел Сайта, с помощью которого Пользователь может получить доступ к
        материалам Библиотеки.
      </Typography>

      <Typography variant='h2'>1. Предмет соглашения</Typography>

      <List sx={{ listStyle: 'decimal', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Настоящее Соглашение регулирует отношения между Пользователем и администрацией Сайта,
            возникающие в связи с использованием Пользователем Сайта любым способом и в любой форме
            в пределах его объявленных функциональных возможностей, включая просмотр, использование
            в своих проектах, комментирование элементов Библиотеки и иных материалов, размещенных на
            Сайте, регистрация и/или авторизация.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>2. Обязанности пользователя</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Пользователь обязуется: не модифицировать, не распространять, не изменять, не копировать
            и не передавать третьим лицам полученные на Сайте материалы и/или их части в любой
            форме.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Использование материалов сайта, предоставляемых как безвозмездно, так и за плату, с
            нарушением обязательств пользователя, а также нарушением прав, в том числе прав
            интеллектуальной собственности, авторских и смежных прав{' '}
            <a href='https://hub.novo-studio.ru/' target='_blank'>
              https://hub.novo-studio.ru/
            </a>
            , наших партнеров и иных третьих лиц, строго запрещается и может обусловить привлечение
            к административной, гражданской или уголовной ответственности.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            При использовании Элементов Библиотеки Пользователь должен заменить изображения, иконки,
            тексты. Данные объекты используются исключительно в демонстрационных целях.
            Использование объектов в качестве контента на сайте возможно только в случае достижения
            Пользователем соответствующих договоренностей с правообладателями.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>3. Условия использования элементов Библиотеки</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Администраторы Сайта не обязаны оказывать консультационную и техническую поддержку
            Пользователю.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Все действия, совершаемые в Личном кабинете, считаются совершенными Пользователем лично.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Для корректной работы Библиотеки и возможности загрузки элементов, имеющих отношение к
            сторонним сервисам, Пользователь должен убедиться в том, что его аккаунт на сторонней
            платформе оплачен. Оплата тарифов с сервисом производится Пользователем самостоятельно и
            регулируется условиями предоставления услуг сторонней платформы.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>4. Условия покупки и доставки</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Для получения доступа к платным элементам Библиотеки пользователь выбирает и оплачивает
            нужный элемент на Сайте.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Стоимость элемента Библиотеки может изменяться по одностороннему решению Администрации.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Перед оплатой необходимо авторизоваться на Сайте (
            <a href='https://hub.novo-studio.ru/login' target='_blank'>
              https://hub.novo-studio.ru/login
            </a>
            ). После оплаты выбранного элемента, Пользователь получает доступ к элементу Библиотеки.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Оплата элементов Библиотеки осуществляется на условиях cтопроцентной предоплаты.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Датой оплаты является дата зачисления денежных средств на расчетный счет Администратора
            Сайта.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Обязательства по оплате считаются неисполненными в случае возврата денежных средств по
            требованию платежной организации.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Неиспользование Пользователем возможностей элементов Библиотеки не освобождает
            Пользователя от их оплаты.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            При наличии замечаний к полученным элементам Библиотеки покупатель обязуется в течение 7
            (семи) рабочих дней с момента оплаты направить письменную мотивированную претензию на
            электронный адрес A.M.Novo@ya.ru. После получения письма Администратор Сайта обязуется
            принять все возможные меры к устранению недостатков, или произвести возврат денежных
            средств. Если в течение 7 (семи) рабочих дней с момента оплаты от покупателя не поступит
            письменной мотивированной претензии, элементы Библиотеки считаются принятыми без
            замечаний.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Вы соглашаетесь, что в случае невозможности передачи доступа, в том числе ошибки в
            указанных при оформлении заказа данных, будет расцениваться Сайтом как ваш отказ от
            товара. Сообщите об ошибке письмом на электронный адрес A.M.Novo@ya.ru для разрешения
            ситуации.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>5. Ответственность</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Администрация Сайта не дает Пользователю гарантий в отношении пригодности для конкретных
            целей, безопасности и защищенности, точности, полноты, производительности, системной
            интеграции, бесперебойного функционирования, отсутствия ошибок, исправления неполадок,
            отсутствия вирусов, законности использования на любых территориях за пределами
            Российской Федерации.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Сайт не несет ответственности за: невозможность использования Библиотеки по причинам, не
            зависящим от Администрации; любые действия и/или бездействия поставщиков услуг,
            сервисов, сетей, программного обеспечения или оборудования; искажение, изменение, утрату
            Контента (включая ссылки на сторонние ресурсы); безопасность логина и/или пароля
            Пользователя; несанкционированное и/или неправомерное использования третьими лицами
            логина и/или пароля Пользователя; ущерб, который может быть нанесен любым устройствам и
            носителям информации и/или программному обеспечению Пользователя в результате
            использования Элементов Библиотеки; последствия передачи Элементов Библиотеки между
            Аккаунтами.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Сайт не несет ответственности за прямую или косвенную упущенную выгоду Пользователя.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Ответственность Сайта по Соглашению не может превышать стоимости оплаченного
            Пользователем элемента Библиотеки.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Пользователь самостоятельно несет ответственность за сохранность своего логина и пароля
            и последствия в случае утери и/или разглашения логина и пароля третьим лицам. Не
            рекомендуем передавать третьим лицам данные своего Аккаунта. В случае передачи данных
            Аккаунта Пользователь должен ознакомить третьих лиц с Соглашением и несет всю
            ответственность за их действия.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>6. Заключительные положения</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Данное Соглашение не требует скрепления печатями и/или подписания сторонами, сохраняя
            при этом полную юридическую силу.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Администрация Сайта вправе в любое время в одностороннем порядке без предварительного
            уведомления Пользователя вносить изменения в условия Соглашения. Изменения вступают в
            силу с момента опубликования новой версии Соглашения. Действующая редакция Соглашения
            постоянно доступна для ознакомления по адресу:{' '}
            <a href='https://hub.novo-studio.ru/terms' target='_blank'>
              https://hub.novo-studio.ru/terms
            </a>
            .
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>8. Реквизиты</Typography>

      <Typography className='font-bold'>Самозанятая Зайцева Алина Анатольевна</Typography>
      <Typography>ИНН: 181001956299</Typography>
      <Typography>Почта: A.M.Novo@ya.ru</Typography>
      <Typography>Телефон: +7(999) 567-03-36</Typography>
    </div>
  );
}
