const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Du våkner opp, går inn på kjøkkenet og ser en mynt på bordet',
    options: [
      {
        text: 'Ta mynten',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'La mynten være',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Du fortsetter nedover i 1.etg og står ovenfor 3 dører',
    options: [
      {
        text: 'Gå inn på badet',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Gå inn på gjesterommet',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Gå inn på treningsrommet',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'På rommet ser du deg rundt og lurer på hva du skal gjøre',
    options: [
      {
        text: 'Sett deg ned og vent på at gode ting skjer',
        nextText: 4
      },
      {
        text: 'Gi opp og gå og legg deg igjen',
        nextText: 5
      },
      {
        text: 'Begynne å lete rundt på rommet',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Gode ting tar tid og du venter og venter helt til du sovner og jula er plutselig forbi',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Du legger deg og sover i 9 dager. Plutselig er julen over og det er nytt år',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Du begynner å se deg rundt omkring i rommet og får øye på noe',
    options: [
      {
        text: 'Utforsk nærmere',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Letingen tar på og du begynner å lure på om du virkelig finner noe',
    options: [
      {
        text: 'Gi opp og lag frokost',
        nextText: 8
      },
      {
        text: 'Du sjekker i baderomsskuffen',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Du sjekker i skapet på gjesterommet',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Du sjekker under TVen på treningsrommet',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Du gikk glipp av premien.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Der var det dessverre ikke noe',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Der var det dessverre ikke noe.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Bingo, det var FLAX!',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()