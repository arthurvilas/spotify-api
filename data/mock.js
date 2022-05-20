const mock = `{
  "musicas": [
  {
    "id": 1,
    "nome": "Happy Rock",
    "autor": "Bensound",
    "audio": "/songs/happyrock.mp3"
  },
  {
    "id": 2,
    "nome": "Summer Nights",
    "autor": "SIAMES",
    "audio": "/songs/happyrock.mp3"
  },
  {
    "id": 3,
    "nome": "Halleluya",
    "autor": "Shrek",
    "audio": "/songs/happyrock.mp3"
  }
],
  "playlists": [
  {
    "id": 1,
    "idUsuario": 0,
    "descricao": "Classic Rock",
    "Capa": "/capas/ClassicRockCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 2,
    "idUsuario": 0,
    "descricao": "House Party",
    "Capa": "/capas/HousePartyCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 3,
    "idUsuario": 0,
    "descricao": "Pop Leve",
    "Capa": "/capas/PopLeveCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 4,
    "idUsuario": 0,
    "descricao": "Presença Hip Hop",
    "Capa": "/capas/PresencaHipHopCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 5,
    "idUsuario": 0,
    "descricao": "Bonde do Funk",
    "Capa": "/capas/BondeDoFunkCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 6,
    "idUsuario": 0,
    "descricao": "Classicos Sertanejo",
    "Capa": "/capas/ClassicosSertanejoCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 7,
    "idUsuario": 0,
    "descricao": "Pagode Romântico",
    "Capa": "/capas/PagodeRomanticoCover.jpg",
    "musicas": [
      1,
      2
    ]
  },
  {
    "id": 8,
    "idUsuario": 0,
    "descricao": "Louvor & Adoração",
    "Capa": "/capas/LouvoreAdoracaoCover.jpg",
    "musicas": [
      1,
      2
    ]
  }
],
  "usuarios": [
  {
    "nome": "Cleiton",
    "sobrenome": "Jones",
    "dataDeNascimento": "1990-05-05",
    "genero": "masculino",
    "email": "cleiton@jones",
    "senha": "cleiton12",
    "plano": "1",
    "id": 3
  },
  {
    "nome": "Jerson",
    "sobrenome": "Joao",
    "dataDeNascimento": "2004-12-19",
    "genero": "masculino",
    "email": "jerson@joao",
    "senha": "segredp5",
    "plano": "1",
    "id": 4
  },
  {
    "nome": "joaquinha",
    "sobrenome": "souza",
    "dataDeNascimento": "1999-05-05",
    "genero": "outro",
    "email": "joao@sassqs",
    "senha": "senha2",
    "plano": "2",
    "id": 5
  },
  {
    "nome": "teste",
    "sobrenome": "testesobrenome",
    "dataDeNascimento": "1889-06-05",
    "genero": "masculino",
    "email": "teste@email.com4333343434",
    "senha": "senha2",
    "plano": "1",
    "id": 6
  }
]
}`;

module.exports = mock;