import Image from "next/image";

export default function Component() {
  return (
    <div className="container mx-auto space-y-16 px-4 py-12">
      {/* About Me Section */}
      <section>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">About me</h2>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_2fr]">
          <Image
            src="/placeholder.svg?height=400&width=300"
            width={300}
            height={400}
            alt="Profile photo"
            className="aspect-[3/4] w-full rounded-lg object-cover"
            priority
          />
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I offer the expertise and insight to help you achieve your
              aspirations. Here's why partnering with me can make a significant
              difference in reaching your objectives and setting your brand
              apart in a competitive market. I offer the expertise and insight
              to help you achieve your objectives and setting your brand apart
              in a competitive market.
            </p>
            <p className="text-muted-foreground">
              I offer the expertise and insight to help you achieve your
              aspirations. Here's why partnering with me can make a significant
              difference in reaching your objectives and setting your brand
              apart in a competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Courses & Certificates Section */}
      <section>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">
          Courses & Certificates
        </h2>
        <div className="grid gap-4">
          <div>
            <div className="flex items-center p-6">
              <span className="text-muted-foreground mr-4 text-sm">(01)</span>
              <span className="font-medium">Meta Front-end Developer</span>
            </div>
          </div>
          <div>
            <div className="flex items-center p-6">
              <span className="text-muted-foreground mr-4 text-sm">(02)</span>
              <span className="font-medium">MongoDB</span>
            </div>
          </div>
          <div>
            <div className="flex items-center p-6">
              <span className="text-muted-foreground mr-4 text-sm">(03)</span>
              <span className="font-medium">Advanced React</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
