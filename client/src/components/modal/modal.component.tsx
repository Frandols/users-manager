import type { PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './modal.component.module.css'
import Cancel from '@/components/icons/cancel.icon.component'

const variants = {
  background: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  modal: {
    hidden: {
      opacity: 0,
      scale: 0.875,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.25,
        type: 'spring',
        stiffness: 700,
        damping: 20,
      },
    },
  },
}

type ModalProps = {
  visible: boolean
  close: () => void
} & PropsWithChildren

const Modal = ({ visible, close, children }: ModalProps) => {
  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          className={styles.background}
          variants={variants.background}
          key="visible"
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className={styles.modal}
            variants={variants.modal}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className={styles.modalClose}
              onClick={close}
              whileHover={{ scale: 0.925 }}
            >
              <Cancel color="rgb(119 125 134)" width={16} height={16} />
            </motion.button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
