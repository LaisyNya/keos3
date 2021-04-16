const help = (prefix) => {
	return `
「 *Keo's* 」

Hola cómo estan queridos usuarios, hemos actualizado la base de datos del bot para poner nuevas funciones 😀

Disculpas por los inconvenientes 😞

◪ *Información*
  ❏ Comando: 「  ${prefix}  」
  ❏ Creador: Laisy

◪ *Para Usar Al Bot*
  ❏ Registrate con el comando ${prefix}daftar Nombre

◪ *Nueva Funcion*
  │
  ├─ ❏ ${prefix}welcome 1
  └─ "Ojo la persona tiene que tener la foto de perfil publica, en futuras actualizaciones la mejoraremos"

◪ *SOBRE*
  │
  ├─ ❏ ${prefix}ping
  └─ Estado de tu internet "Broma"

◪ *CREAR*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ 6 segundos de video
  ├─ ❏ ${prefix}toimg
  ├─ De sticker a JPG
  ├─ ❏ ${prefix}tomp3
  └─ De video a MP3

◪ *AUDIO*
  │
  ├─ ❏ ${prefix}play
  ├─ Mas nombre y artista
  ├─ ❏ ${prefix}bahasa
  └─ ❏ ${prefix}tts es

◪ *DUEÑO DEL BOT*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  └─ ❏ ${prefix}clearall

◪ *OTROS*
  │
  ├─ ❏ ${prefix}wame
  └─ Link de Whatsapp
 
  
◪ *GRUPOS*
  │
  ├─ ❏ ${prefix}ownergrup
  ├─ Dueño del grupo
  ├─ ❏ ${prefix}closecg
  ├─ Cerrar el grupo solo admins
  ├─ ❏ ${prefix}opencg
  ├─ Abrir grupo solo admins
  ├─ ❏ ${prefix}kick
  ├─ Eliminar a un miembro 
  ├─ ❏ ${prefix}promote
  ├─ Dar admin a un miembro
  ├─ ❏ ${prefix}demote
  ├─ Quitar el admin
  ├─ ❏ ${prefix}tagall
  └─ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  
◪ *NSWF*
  │
  └─ ❏ ${prefix}nsfwmenu

Para activar los NSFW coloque el siguiente comando ${prefix}nsfw 1 y para desactivar los NSFW coloque ${prefix}nsfw 0
`
}

exports.help = help
