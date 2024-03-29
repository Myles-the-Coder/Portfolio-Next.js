import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

const ScrollBtn = () => (
    <OverlayTrigger key={'left'} placement={'left'} overlay={
      <Tooltip id={`tooltip-left`}>Scroll to Top</Tooltip>
    }>
			<Button
				onClick={() => window.scrollTo(0, 0)}
        bsPrefix='scroll-btn'>
				<span>&#8593;</span>
			</Button>
    </OverlayTrigger>
  )


export default ScrollBtn