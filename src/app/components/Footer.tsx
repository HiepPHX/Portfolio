import Image from 'next/image'

export default function Footer() {
  return (
    <>
        <div className="sprite-container flex justify-center mb-2">
            <Image 
            src="/sleepy_neco.gif" 
            width={60} 
            height={60} 
            alt="cyber sprite"
            />
        </div>
        <footer className="w-full py-4 px-8 bg-cyber-dark-blue/30 border-t-2 border-neon-purple">
            <div className="max-w-4xl mx-auto text-center">
                <span className="font-cyber font-footer-text text-sm tracking-wider">
                Created By Eric
                </span>
            </div>
        </footer>
    </>
  );
}
