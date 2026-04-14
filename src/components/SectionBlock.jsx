import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SectionBlock.scss';

/**
 * Reusable collapsible section wrapper.
 * Props:
 *   id          — anchor id for navbar links
 *   title       — section heading
 *   description — subtitle text
 *   count       — number of items (shown as badge)
 *   defaultOpen — whether section starts expanded (default: true)
 *   children    — gallery/grid content
 *   className   — extra class for section-specific theming
 */
export default function SectionBlock({
  id,
  title,
  description,
  count,
  defaultOpen = true,
  children,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section
      id={id}
      className={`section-block ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-block__container">
        <div className="section-block__header">
          <div className="section-block__title-row">
            <h2 id={`${id}-heading`} className="section-block__title">
              {title}
              {count != null && (
                <span className="section-block__badge" aria-label={`${count} items`}>
                  {count}
                </span>
              )}
            </h2>
            <button
              className={`section-block__toggle ${isOpen ? 'section-block__toggle--open' : ''}`}
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
            >
              <span className="section-block__toggle-icon" aria-hidden="true" />
              {isOpen ? 'Hide' : 'Show'}
            </button>
          </div>
          {description && (
            <p className="section-block__description">{description}</p>
          )}
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`${id}-content`}
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
