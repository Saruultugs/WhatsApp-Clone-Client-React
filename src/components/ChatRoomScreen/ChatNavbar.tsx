import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import * as React from 'react'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

const Style = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: var(--primary-bg);
  color: var(--primary-text);
`

const BackButton = styled(Button) `
  svg {
    color: var(--primary-text);
  }
`

const Picture = styled.img `
  height: 40px;
  width: 40px;
  margin-top: 3px;
  margin-left: -22px;
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
`

const Title = styled.div `
  line-height: 56px;
`

export default ({ chat, history }) => {
  const navBack = useCallback(() => {
    history.goBack()
  }, [true])

  return (
    <Style className={name}>
      <BackButton onClick={navBack}>
        <ArrowBackIcon />
      </BackButton>
      <Picture src={chat.picture} />
      <Title>{chat.name}</Title>
    </Style>
  )
}
