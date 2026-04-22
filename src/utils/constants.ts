type Guest = {
  code: string
  name: string
  lastName: string
  rsvp?: boolean
}

// French-inspired codes: Fun, romantic, stereotypical, and burlesque references
// ChatNoir, OohLaLa, Escargot, MonAmour, Baguette, Beret, Croissant, MoulinRouge,
// CanCan, OuiOui, Amelie, Champagne, Bisou, ChezMoi, VoilĂ , CestLaVie, etc.

export const GUESTS: Guest[] = [
  {
    code: 'ChatNoir',
    name: 'Ingela',
    lastName: 'Hoglid',
    rsvp: undefined,
  },
  {
    code: 'ChatNoir',
    name: 'Leif-Anders',
    lastName: 'Hoglid',
    rsvp: undefined,
  },
  {
    code: 'FODUFAFA',
    name: 'Robin',
    lastName: 'Lantz',
    rsvp: undefined,
  },
  {
    code: 'FODUFAFA',
    name: 'Emelie',
    lastName: 'Lantz',
    rsvp: undefined,
  },
  {
    code: 'Escargot',
    name: 'Paula',
    lastName: 'Vidén',
    rsvp: undefined,
  },
  {
    code: 'Escargot',
    name: 'Petter',
    lastName: 'Vidén',
    rsvp: undefined,
  },
]
