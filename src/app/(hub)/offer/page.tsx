import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function Page() {
  return (
    <div className='max-w-screen-md mx-auto overflow-hidden post'>
      <Typography variant='h1' className='mb-8'>
        Публичная оферта
      </Typography>

      <Typography>
        Данный Договор считается официальным предложением (публичной офертой) Самозанятой Зайцевой
        Алины Анатольевны ИНН 181001956299 (в дальнейшем – «Администратор Сайта») для любого
        физического, юридического лица или индивидуального предпринимателя (далее – «Пользователь»),
        которое примет настоящее предложение, на указанных ниже условиях.
      </Typography>

      <Typography variant='h2'>1. Общие условия</Typography>
      <List sx={{ listStyle: 'decimal', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Право на использование элементов Библиотеки, предоставляемое Пользователю в соответствии
            с Договором, включает использование Библиотеки строго в соответствии с Пользовательским
            соглашением, расположенным по адресу:{' '}
            <a href='https://hub.novo-studio.ru/terms' target='_blank'>
              https://hub.novo-studio.ru/terms
            </a>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Термины Договора толкуются в значении Пользовательского соглашения.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            С момента оплаты счета Пользователем Договор считается заключенным (акцепт).
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Текст настоящего Договора оферты (далее по тексту — «Договор», «Оферта», «Договор
            Оферта») расположен по адресу:{' '}
            <a href='https://hub.novo-studio.ru/offer' target='_blank'>
              https://hub.novo-studio.ru/offer
            </a>
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>2. Предмет договора</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>Сайт осуществляет продажу элементов Библиотеки Пользователю.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Ссылка на вход в Библиотеку:{' '}
            <a href='https://hub.novo-studio.ru/login' target='_blank'>
              https://hub.novo-studio.ru/login
            </a>
            .
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>3. Стоимость</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>Цены элементов Библиотеки указываются на Сайте.</ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Цена элементов Библиотеки, указанная на Сайте, может быть изменена Администратором Сайта
            в одностороннем порядке. Цена элемента Библиотеки действительна на момент нажатия
            кнопки, подтверждающей заказ, на последнем этапе оформления Заказа. При этом цена на
            заказанный Пользователем элемент Библиотеки изменению не подлежит.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>4. Платежи. Оплата банковской картой онлайн</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Наш сайт подключен к интернет-эквайрингу, и Вы можете оплатить Товар банковской картой.
            После подтверждения выбранного Товара откроется защищенное окно с платежной страницей
            процессингового центра ЮКасса, где Вам необходимо ввести данные Вашей банковской карты.
            Для дополнительной аутентификации держателя карты используется протокол 3D Secure. Если
            Ваш Банк поддерживает данную технологию, Вы будете перенаправлены на его сервер для
            дополнительной идентификации. Информацию о правилах и методах дополнительной
            идентификации уточняйте в Банке, выдавшем Вам банковскую карту.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>5. Платежи. Оплата по счету для юридических лиц и ИП</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            По запросу мы можем выставить счет за продукты для вашей организации: вы сообщаете нам
            реквизиты (название юрлица или ИП. ИНН, КПП, БИК и название банка, корреспондентский
            расчетный счет, адрес), после чего мы формируем счет на оплату и доставляем вам продукты
            в течение 3-х дней после поступления средств на наш счет.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>6. Ответственность</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            За нарушение условий Договора и/или Пользовательского соглашения стороны несут
            ответственность в объеме, предусмотренном Пользовательским соглашением и действующим
            законодательством РФ.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Пользователь самостоятельно несет ответственность за достоверность введенных им данных
            на Сайте.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Сайт не несет ответственности за нарушения работоспособности сторонних сервисов,
            используемых для создания, редактирования, размещения элементов Библиотеки.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Стороны освобождаются от ответственности за частичное или полное неисполнение
            обязательств по Договору, если это неисполнение явилось следствием обстоятельств
            непреодолимой силы, возникших после заключения Договора в результате событий
            чрезвычайного характера, которые сторона не могла ни предвидеть, ни предотвратить
            разумными мерами (форс-мажор). К таким событиям относятся: наводнение, пожар,
            землетрясение, шторм, оседание почвы, эпидемии и иные явления природы, а также война или
            военные действия, забастовка в отрасли или регионе, принятие органом государственной
            власти решения, повлекшего невозможность оказания услуг.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h2'>7. Заключительные положения</Typography>

      <List sx={{ listStyle: 'decimal', pl: 8 }}>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Данный Договор не требует скрепления печатями и/или подписания сторонами, сохраняя при
            этом полную юридическую силу.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText>
            Администрация Сайта вправе в любое время в одностороннем порядке без предварительного
            уведомления Пользователя вносить изменения в условия Договора. Изменения вступают в силу
            с момента опубликования новой версии Договора. Действующая редакция Договора постоянно
            доступна для ознакомления по адресу:{' '}
            <a href='https://hub.novo-studio.ru/offer' target='_blank'>
              https://hub.novo-studio.ru/offer
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
