CREATE TABLE "todo" (
    "id" SERIAL PRIMARY KEY,
    "objective" VARCHAR (280) NOT NULL,
    "completed" BOOLEAN DEFAULT false
);

INSERT INTO "todo" ("objective")
VALUES
('Walk the dog'),
('Buy milk'),
('Vacuum the chimney'),
('Write to Hans'),
('Replace Batmobile');

ALTER TABLE "todo"
ADD "date_added" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
ADD "deadline" TIMESTAMPTZ,
ADD "date_completed" TIMESTAMPTZ;