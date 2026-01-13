import { IconButton, Stack, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'

export default function FAQItem({
  question,
  answer,
  index,
  expandedIndex,
  handleToggle,
}: {
  question: string
  answer: string
  index: number
  expandedIndex: number | null
  handleToggle: (i: number) => void
}) {
  const isExpanded = expandedIndex === index

  return (
    <Stack
      sx={{
        width: '100%',
        px: 2,
        py: 1,
        background: 'common.white',
        border: '1px solid',
        borderColor: '#F2F2F2',
        boxShadow: '0px 4px 16px 0px #00000014',
        borderRadius: 3,
        cursor: 'pointer',
      }}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => handleToggle(index)}
        spacing={2}
      >
        <Typography
          variant="subtitle1"
          fontSize={{ xs: 14, md: 16 }}
          lineHeight="normal"
          fontWeight={300}
        >
          {question}
        </Typography>

        <IconButton
          size="small"
          component={motion.button}
          animate={{ rotate: isExpanded ? -180 : 0 }}
          transition={{ duration: 0.25 }}
          sx={{
            transition: 'transform 0.2s',
            color: 'var(--palette-success-main)',
          }}
        >
          <ExpandMore />
        </IconButton>
      </Stack>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <Typography
              variant="subtitle1"
              fontSize={{ xs: 14, md: 16 }}
              fontWeight={300}
              color="text.secondary"
              sx={{ pt: 2 }}
            >
              {answer}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  )
}
