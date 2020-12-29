import styled from "styled-components"
import { Link } from "gatsby"

export const SubjectLinksWrapper = styled.section`
  margin: 4rem 10rem;
`

export const SubjectLinksBlockquote = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`
export const SubjectLinksBlockquoteBorder = styled.div`
  width: 0.4rem;
  height: 2.2rem;
  border-radius: 1rem;
  background-color: #cee3ff;
  margin-right: 1rem;
`
export const SubjectLinksBlockquoteText = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  color: var(--blueStrDark);
`

export const SubjectLinksList = styled.ul`
  display: grid;
  grid-area: home;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`

export const SubjectLinksItem = styled.li`
`

export const SubjectLinksLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  background-color: var(--base);
  padding: 2rem;
  box-shadow: 0px 0px 5px var(--light);
  border-radius: 10px;
  transition: 200ms;
  border-left: 4px solid #cee3ff;

  &:hover {
    translate: 2px -4px;
  }

`

export const SubjectLinksText = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--blueStrSoft);
  margin-top: 2rem;
`