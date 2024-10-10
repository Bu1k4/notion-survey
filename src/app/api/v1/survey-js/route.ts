import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initializing a client
//process.env.NOTION_SECRET
const notion = new Client({
  auth: "secret_5Hi5bv2fl3ErvRmMoJtCrYZsMykP1YGgIydidvWLExb",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID || "" },
      properties: {
        Question1: {
          title: [
            {
              type: "checkbox",
              text: {
                content: body.question1,
              },
            },
          ],
        },
        Question2: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question2,
              },
            },
          ],
        },
         Question3: {
          rich_text: [
            {
              type: "multipletext",
              text: {
                content: body.question3,
              },
            },
          ],
        },
         Question4: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question4,
              },
            },
          ],
        },
         Question5: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question5,
              },
            },
          ],
        },
         Question6: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question6,
              },
            },
          ],
        },
         Question7: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question7,
              },
            },
          ],
        },
         Question8: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question8,
              },
            },
          ],
        },
         Question9: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question9,
              },
            },
          ],
        },
         Question10: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question10,
              },
            },
          ],
        },
         Question11: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question11,
              },
            },
          ],
        },
         Question12: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question12,
              },
            },
          ],
        },
         Question13: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question13,
              },
            },
          ],
        },
         Question14: {
          rich_text: [
            {
              type: "text",
              text: {
                content: body.question14,
              },
            },
          ],
        },
         Question15: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question15,
              },
            },
          ],
        },
         Question16: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question16,
              },
            },
          ],
        },
         Question17: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question17,
              },
            },
          ],
        },
         Question18: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question18,
              },
            },
          ],
        },
         Question19: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question19,
              },
            },
          ],
        },
         Question20: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question20,
              },
            },
          ],
        },
         Question21: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question21,
              },
            },
          ],
        },
         Question22: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question22,
              },
            },
          ],
        },
         Question23: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question23,
              },
            },
          ],
        },
         Question24: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question24,
              },
            },
          ],
        },
         Question25: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question25,
              },
            },
          ],
        },
         Question26: {
          rich_text: [
            {
              type: "boolean",
              text: {
                content: body.question26,
              },
            },
          ],
        },
         Question27: {
          rich_text: [
            {
              type: "checkbox",
              text: {
                content: body.question27,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    return NextResponse.json({ message: "Survey data submitted." });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "GET method not allowed" },
    { status: 405 }
  );
}
