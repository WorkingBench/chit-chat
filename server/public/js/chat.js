const socket = io()

// Elements
const $messageForm = document.querySelector('#chat-zone')
const $messageFormInput = $messageForm.querySelector('#chat-message')
const $messageFormButton = $messageForm.querySelector('button')
const $locationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

// Options
const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

socket.on('message', (message) => {
  console.log(message)
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format('h:mm a')
  })
  $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', (location) => {
  const html = Mustache.render(locationMessageTemplate, {
    username: message.username,
    url: location.url,
    createdAt: moment(location.createdAt).format('h:mm a')
  })
  $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener('submit', (e) => {
  e.preventDefault()

  $messageFormButton.setAttribute('disabled', 'disabled')
  const inputMessage = e.target.elements['chat-message'].value
  socket.emit('sendMessage', inputMessage, (error) => {

    $messageFormButton.removeAttribute('disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus()

    if (error) {
      return console.log(error)
    }

    console.log('Message delivered!')
  })
})

$locationButton.addEventListener('click', (e) => {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser.')
  }
  $locationButton.setAttribute('disabled', 'disabled')

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('sendLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, () => {
      console.log('Location shared!')
      $locationButton.removeAttribute('disabled')
    })
  })
})

socket.emit('join', { username, room }, (error) => {
  if (error) {
    alert(error)
    location.href = '/'
  }
})