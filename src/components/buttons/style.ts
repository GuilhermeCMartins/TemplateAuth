import { styled } from '../../stitches.config'


export const Button = styled('button',{
    backgroundColor: '$purple500',
    borderRadius: '9999px',
    border: "1px solid black",
    fontSize: '$2',
    padding: '$2 $3',
  ' &:hover': {
    backgroundColor: 'lightgray',
  },
})

export const Link = styled('a',{
    backgroundColor: '$purple500',
    borderRadius: '9999px',
    fontSize: '$2',
    border: "1px solid black",
    padding: '$2 $3',
  ' &:hover': {
    backgroundColor: 'lightgray',
  },
})