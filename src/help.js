const help = (prefix) => {
	return `
γ *Keo's* γ

Hola cΓ³mo estan queridos usuarios, hemos actualizado la base de datos del bot para poner nuevas funciones π

Disculpas por los inconvenientes π

βͺ *InformaciΓ³n*
  β Comando: γ  ${prefix}  γ
  β Creador: Laisy

βͺ *Para Usar Al Bot*
  β Registrate con el comando ${prefix}daftar Nombre

βͺ *Nueva Funcion*
  β
  ββ β ${prefix}welcome 1
  ββ "Ojo la persona tiene que tener la foto de perfil publica, en futuras actualizaciones la mejoraremos"

βͺ *SOBRE*
  β
  ββ β ${prefix}ping
  ββ Estado de tu internet "Broma"

βͺ *CREAR*
  β
  ββ β ${prefix}sticker
  ββ β ${prefix}stickergif
  ββ 6 segundos de video
  ββ β ${prefix}toimg
  ββ De sticker a JPG
  ββ β ${prefix}tomp3
  ββ De video a MP3

βͺ *AUDIO*
  β
  ββ β ${prefix}play
  ββ Mas nombre y artista
  ββ β ${prefix}bahasa
  ββ β ${prefix}tts es

βͺ *DUEΓO DEL BOT*
  β
  ββ β ${prefix}setprefix
  ββ β ${prefix}block
  ββ β ${prefix}bc
  ββ β ${prefix}bcgc
  ββ β ${prefix}clearall

βͺ *OTROS*
  β
  ββ β ${prefix}wame
  ββ Link de Whatsapp
 
  
βͺ *GRUPOS*
  β
  ββ β ${prefix}ownergrup
  ββ DueΓ±o del grupo
  ββ β ${prefix}closecg
  ββ Cerrar el grupo solo admins
  ββ β ${prefix}opencg
  ββ Abrir grupo solo admins
  ββ β ${prefix}kick
  ββ Eliminar a un miembro 
  ββ β ${prefix}promote
  ββ Dar admin a un miembro
  ββ β ${prefix}demote
  ββ Quitar el admin
  ββ β ${prefix}tagall
  ββ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  
βͺ *NSWF*
  β
  ββ β ${prefix}nsfwmenu

Para activar los NSFW coloque el siguiente comando ${prefix}nsfw 1 y para desactivar los NSFW coloque ${prefix}nsfw 0
`
}

exports.help = help
