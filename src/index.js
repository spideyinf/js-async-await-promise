const isMomHappy = true

const willGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'iPhone',
      color: 'black',
    }
    resolve(phone)
  } else {
    const reason = new Error('mom is not happy')
    reject(reason)
  }
})

async function showOff(phone) {
  const message = `Hey buddy, I have a new ${phone.color} ${
    phone.brand
  }!!!`

  return Promise.resolve(message)
}

async function askMom() {
  try {
    console.log('before asking Mom')

    let phone = await willGetNewPhone
    let message = await showOff(phone)

    console.log(message)
    console.log('after asking Mom')
  } catch (err) {
    console.log(err.message)
  }
}

;(async () => {
  await askMom()
})()
