import React, { FC, useState, useEffect } from 'react'

export type InterSectionObserverUtils = {
  observe: () => void
  disconnect: () => void
}

const IntersectionObserverContext =
  React.createContext<InterSectionObserverUtils | null>(null)

const IntersectionObserverProvider: FC = (props) => {
  const { children } = props

  const [intersectionObserver, setIntersectionObserver] =
    useState<InterSectionObserverUtils | null>(null)

  useEffect(() => {
    const intersectionObserved = new CustomEvent('intersection-observed')

    const baseIntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entryTarget = entry.target as HTMLElement
          let targetRatio = Number(entryTarget.dataset.intersectionRatio)
          if (isNaN(targetRatio)) {
            targetRatio = 0
          }

          if (entry.intersectionRatio > targetRatio) {
            entryTarget.classList.add('observed-show')
            entryTarget.dispatchEvent(intersectionObserved)
            baseIntersectionObserver.unobserve(entryTarget)
          }
        })
      },
      { root: null, threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75] }
    )

    const observeFunc = () => {
      document.querySelectorAll('.observed').forEach((node) => {
        baseIntersectionObserver.observe(node)
      })
    }

    const disconnectFunc = () => {
      baseIntersectionObserver.disconnect()
    }

    const intersectionObserverUtils = {
      observe: () => observeFunc(),
      disconnect: () => disconnectFunc(),
    }

    if (document.querySelectorAll('.observed').length > 0) {
      intersectionObserverUtils.observe()
    }

    setIntersectionObserver(intersectionObserverUtils)

    return () => intersectionObserverUtils.disconnect()
  }, [])

  return (
    <IntersectionObserverContext.Provider value={intersectionObserver}>
      {children}
    </IntersectionObserverContext.Provider>
  )
}

const IntersectionObserverConsumer = IntersectionObserverContext.Consumer

export {
  IntersectionObserverContext,
  IntersectionObserverProvider,
  IntersectionObserverConsumer,
}

export default IntersectionObserverContext
