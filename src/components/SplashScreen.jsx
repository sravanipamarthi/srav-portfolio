import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
    const [phase, setPhase] = useState('intro');
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Sravani Pamarthi';

    useEffect(() => {
        const blink = setInterval(() => setShowCursor(p => !p), 500);
        return () => clearInterval(blink);
    }, []);

    useEffect(() => {
        const introTimer = setTimeout(() => setPhase('typing'), 1500);
        return () => clearTimeout(introTimer);
    }, []);

    useEffect(() => {
        if (phase !== 'typing') return;
        let i = 0;
        const typer = setInterval(() => {
            setTypedText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) {
                clearInterval(typer);
                setTimeout(() => {
                    setPhase('exit');
                    setTimeout(onComplete, 900);
                }, 3500);
            }
        }, 80);
        return () => clearInterval(typer);
    }, [phase]);

    return (
        <AnimatePresence>
            {phase !== 'exit' ? (
                <motion.div
                    key="splash"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        background: '#0f0b07',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    {/* Ambient glow */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ delay: 0.3, duration: 1.5, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            width: '500px',
                            height: '500px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, #7B3F00 0%, transparent 70%)',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            filter: 'blur(60px)',
                        }}
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.15 }}
                        transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, #D6C7B1 0%, transparent 70%)',
                            top: '30%',
                            right: '20%',
                            filter: 'blur(80px)',
                        }}
                    />

                    {/* Decorative code bracket */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 0.12, x: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '8%',
                            fontFamily: 'monospace',
                            fontSize: '6rem',
                            color: '#D6C7B1',
                            lineHeight: 1,
                            userSelect: 'none',
                        }}
                    >
                        {'</>'}
                    </motion.div>

                    {/* Dot grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.06 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        style={{
                            position: 'absolute',
                            bottom: '15%',
                            right: '10%',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(6, 1fr)',
                            gap: '10px',
                        }}
                    >
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D6C7B1' }} />
                        ))}
                    </motion.div>

                    {/* Horizontal lines */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 0.1 }}
                        transition={{ delay: 0.4, duration: 1.2, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', top: '35%', left: 0, right: 0, height: '1px',
                            background: 'linear-gradient(90deg, transparent 0%, #D6C7B1 50%, transparent 100%)',
                            transformOrigin: 'center',
                        }}
                    />
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 0.08 }}
                        transition={{ delay: 0.6, duration: 1.2, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', top: '65%', left: 0, right: 0, height: '1px',
                            background: 'linear-gradient(90deg, transparent 0%, #7B3F00 50%, transparent 100%)',
                            transformOrigin: 'center',
                        }}
                    />

                    {/* Main content */}
                    <div style={{ position: 'relative', textAlign: 'center', zIndex: 10 }}>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '0.75rem',
                                letterSpacing: '0.3em',
                                color: '#7B3F00',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                            }}
                        >
                            SOFTWARE ENGINEER
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: phase === 'typing' || typedText ? 1 : 0 }}
                            style={{
                                fontFamily: '"Georgia", "Times New Roman", serif',
                                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                fontWeight: 300,
                                letterSpacing: '-0.02em',
                                color: '#F5EFE6',
                                marginBottom: '0.5rem',
                                minHeight: '1.2em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '2px',
                            }}
                        >
                            <span>{typedText}</span>
                            <motion.span
                                animate={{ opacity: showCursor ? 1 : 0 }}
                                transition={{ duration: 0 }}
                                style={{
                                    display: 'inline-block',
                                    width: '3px',
                                    height: '0.9em',
                                    background: '#7B3F00',
                                    borderRadius: '2px',
                                    marginLeft: '2px',
                                    verticalAlign: 'middle',
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: typedText.length === fullText.length ? 1 : 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontFamily: 'monospace',
                                fontSize: '0.8rem',
                                color: '#A98467',
                                letterSpacing: '0.15em',
                                marginTop: '1rem',
                            }}
                        >
                            Engineering digital experiences that matter
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.4 }}
                            style={{
                                marginTop: '3rem',
                                width: '200px',
                                height: '2px',
                                background: 'rgba(255,255,255,0.06)',
                                borderRadius: '2px',
                                margin: '3rem auto 0',
                                overflow: 'hidden',
                            }}
                        >
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.8, duration: 5.5, ease: 'easeInOut' }}
                                style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #7B3F00, #D6C7B1)',
                                    borderRadius: '2px',
                                }}
                            />
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 2, duration: 0.5 }}
                            whileHover={{ opacity: 1 }}
                            onClick={() => { setPhase('exit'); setTimeout(onComplete, 900); }}
                            style={{
                                marginTop: '2rem',
                                background: 'none',
                                border: 'none',
                                color: '#A98467',
                                fontFamily: 'monospace',
                                fontSize: '0.7rem',
                                letterSpacing: '0.2em',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                            }}
                        >
                            click to skip →
                        </motion.button>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default SplashScreen;