import {useRef, useState, useEffect} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import Link from 'next/link'
import {
  Title,
  Container,
  CardContent,
  VideoPlayer,
  ImageContainer,
  DetailsCount,
  Arrow,
  Circle,
} from './style'
import Picture from '../Picture'
import Card from '../Card'

export default function DesignDetailsCard(props) {
  const videoEl = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const {
    summary: { title, slug, firstDetail, tint, detailsCount },
  } = props

  const srcset = [
    `/static/img/portfolio/${slug}.webp`,
    `/static/img/portfolio/${slug}.jpeg`,
  ]

  const videosrc = firstDetail.media[0]

  const pause = () => {
    videoEl.current && videoEl.current.pause()
  }

  const play = () => {
    videoEl.current && videoEl.current.play()
  }

  useEffect(() => {
    setIsMounted(true)
    setIsMobile(window.innerWidth <= 968)
  }, [])

  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(visible) => visible && setIsVisible(true)}
    >
      <Link
        href="/works/[slug]"
        as={`/works/${slug}`}
        passHref
      >
        <a>
          <Card className="lg:-mx-8">
            <Container onMouseEnter={play} onMouseLeave={pause}>
              <ImageContainer>
                <Picture
                  width={'56px'}
                  height={'56px'}
                  alt={'Design Details'}
                  srcset={srcset}
                />
              </ImageContainer>
              <CardContent>
                <Title>{title}</Title>
                <DetailsCount>{detailsCount} details</DetailsCount>
              </CardContent>
              <Circle color={tint} />
              <Arrow>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
              </Arrow>
              {isVisible && isMounted && !isMobile && (
                <VideoPlayer
                  playsInline
                  muted
                  ref={videoEl}
                  loop
                  autoPlay={false}
                  preload="metadata"
                  src={`${videosrc}#t=0.1`}
                />
              )}
            </Container>
          </Card>
        </a>
      </Link>
    </ReactVisibilitySensor>
  )
}
