import * as Tabs from "@radix-ui/react-tabs";

export default function TabBox() {
  return (
    <div className="w-[100%] mx-auto bg-cyber-dark-blue/50 rounded-xl border-4 border-neon-purple p-6 shadow-neon-box">
      <Tabs.Root defaultValue="skills" className="w-full">
        <Tabs.List className="flex space-x-2 mb-8 justify-center">
          {["Skills", "Experience", "Projects"].map((tab) => (
            <Tabs.Trigger
              key={tab.toLowerCase()}
              value={tab.toLowerCase()}
              className="font-tech px-6 py-3 text-white border-2 border-neon-purple rounded-md
                       hover:bg-neon-purple/20 data-[state=active]:bg-neon-purple/30
                       transition-all duration-300 tracking-wider"
            >
              {tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="p-4 bg-cyber-dark-blue/30 rounded-lg">
          <Tabs.Content value="skills" className="font-neon text-white">
            <h2 className="font-cyber text-2xl text-neon-purple mb-4">Technical Skills</h2>
            {/* Add your skills content here */}
          </Tabs.Content>

          <Tabs.Content value="experience" className="font-neon text-white">
            <h2 className="font-cyber text-2xl text-neon-purple mb-4">Work Experience</h2>
            {/* Add your experience content here */}
          </Tabs.Content>

          <Tabs.Content value="projects" className="font-neon text-white">
            <h2 className="font-cyber text-2xl text-neon-purple mb-4">Featured Projects</h2>
            {/* Add your projects content here */}
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}
