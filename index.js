///1

function instagramPost(
    handleOfAuthor,
    content,
    imageLink,
    numberOfViews,
    numberOfLikes,
  ) {
    this.handleOfAuthor = handleOfAuthor
    this.content = content
    this.imageLink = imageLink
    this.numberOfViews = numberOfViews
    this.numberOfLikes = numberOfLikes
  }
  
  ////2
  const post = new instagramPost(
    'chii_nonye',
    'coding',
    'www.chinonye',
    '902',
    1000,
  )
  console.log(post)
  
  const post2 = new instagramPost('yolanda', 'coding', 'www.yolanda', '905', 199)
  console.log(post2)
  
  ////3a
  
  function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    }
  }
  
  const musaObj = createPerson('Musa', 19, 'Lekki')
  
  console.log(musaObj)
  
  /////3b
  function createJambScores(eng, govt, lit, crk) {
    return {
      eng: eng,
      govt: govt,
      lit: lit,
      crk: crk,
    }
  }
  
  const jambScore = createJambScores('70', '85', '82', '94')
  
  console.log(jambScore)
  musaObj.scores = createJambScores(70, 85, 82, 94)
  console.log(musaObj)
  
  const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
  }
  for (let x in presidentialCandidates) {
    console.log(
      `${presidentialCandidates[x]} is the presidential candidate of ${x}`,
    )
  }