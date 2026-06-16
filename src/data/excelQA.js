// src/data/excelQA.js
export const excelQA = [
  {
    question: "What do you mean by Microsoft Excel?",
    answer: "Microsoft Excel is a software program included in Microsoft Office suite, used for creating spreadsheets where data is laid out in rows and columns."
  },
  {
    question: "What is meant by the cell address in Microsoft Excel?",
    answer: "A cell address identifies a particular cell on a worksheet, denoted by a combination of column letter and row number (e.g., A1)."
  },
  {
    question: "List out the order of operations used in Microsoft Excel while evaluating formulas.",
    answer: "PEDMAS order: Parentheses, Exponentiation, Division/Multiplication, Addition, Subtraction (e.g., ((B1*20)+5)/2)."
  },
  {
    question: "How is Formula different from Function in Microsoft Excel?",
    answer: "A formula is an equation typed by the user (e.g., =C1+C2+C3). A function is a predefined built-in calculation (e.g., =SUM(C1:C3)). Functions are faster and more convenient."
  },
  {
    question: "How will you write the formula for: Multiplying the value in cell C1 by 20, add the result by 6, and divide it by 2.",
    answer: "The correct formula is `=((C1*20)+6)/2` following PEDMAS precedence."
  },
  {
    question: "Can we add cells to a given sheet?",
    answer: "Yes. Select the cell where you want to insert, go to Insert option, choose shift direction, and click OK."
  },
  {
    question: "Is formatting of MS Excel cells possible? If yes, then how?",
    answer: "Yes, using commands in the Font group of the Home tab. Options: Number (currency, date, percentage), Alignment, Font (styles, sizes, colors), Protection (lock/hide cells)."
  },
  {
    question: "Can we add comments to a cell in Microsoft Excel?",
    answer: "Yes. Right-click the cell and select 'New Comment' (or 'New Note' in newer versions). Comments are visible to those with access to the sheet."
  },
  {
    question: "Can we add new rows and new columns to an Excel sheet?",
    answer: "Yes. Select where to add, right-click, choose Insert, then select entire row or column."
  },
  {
    question: "What do you mean by Ribbon in Microsoft Excel?",
    answer: "The Ribbon is the top area containing menu items and toolbars. It can be shown/hidden with CTRL+F1 and replaces traditional menus and toolbars."
  },
  {
    question: "How many types of data formats are available in Microsoft Excel? Name some.",
    answer: "Eleven data formats. Examples: Number, Currency, Date, Percentage, Text."
  },
  {
    question: "What do you mean by Macro in Microsoft Excel?",
    answer: "A macro is used to iterate over a group of tasks, automating repetitive functions. Macros can be written or recorded."
  },
  {
    question: "Which are the two macro languages in Microsoft Excel?",
    answer: "XLM (older versions) and VBA (Visual Basic for Applications, introduced in Excel 5, now primary)."
  },
  {
    question: "What do we mean by charts in Microsoft Excel?",
    answer: "Charts enable graphical representation of data. Types include column, bar, line, pie, scatter, etc., accessible from Insert tab's Chart group."
  },
  {
    question: "Explain a few useful functions used in Microsoft Excel.",
    answer: "Mathematical: SQRT, DEGREE. Logical: IF, AND, FALSE, TRUE. Date/Time: NOW(), DATEVALUE(), WEEKDAY(NOW()). Lookup: VLOOKUP, INDEX MATCH."
  },
  {
    question: "What does the red triangle at the top right of a cell in Excel indicate?",
    answer: "It indicates that a comment is associated with the cell. Hover the mouse to read the comment."
  },
  {
    question: "How can we resize a column in Microsoft Excel?",
    answer: "Change the width by dragging the boundary on the right side of the column heading until the desired width is reached."
  },
  {
    question: "Explain pivot tables and their uses in Excel.",
    answer: "A pivot table quickly summarizes extensive data, automatically performing sorting, counting, totaling, or averaging, and displays results in another spreadsheet."
  },
  {
    question: "How can you add a Note to a cell in Microsoft Excel?",
    answer: "Right-click the cell and select 'New Note', then type the note."
  },
  {
    question: "Can we protect workbooks in Microsoft Excel?",
    answer: "Yes. Options: set passwords to open workbooks, protect sheets from adding/deleting, protect window sizes/positions from changing."
  },
  {
    question: "How can one apply a single format to all sheets in a workbook?",
    answer: "Right-click any sheet, select 'Select All Sheets', then format any sheet. The format will be applied to all sheets."
  },
  {
    question: "What do we understand by Relative Cell Addresses?",
    answer: "When copying formulas, reference cell addresses automatically modify to match the new position. This is achieved by relative cell addresses."
  },
  {
    question: "Can we protect cells of a sheet from being copied to another cell?",
    answer: "Yes. Select cells, open Font window > Protection pane, check Hidden. Then go to Review tab > Protect Sheet and set a password."
  },
  {
    question: "How do we create Named Ranges in Microsoft Excel?",
    answer: "Select the area, go to Formulas tab, click Define Name in Defined Names group, and give a name."
  },
  {
    question: "Can we create Pivot tables using multiple tables?",
    answer: "Yes. Press Alt+D then P to open PivotTable Wizard, select 'Multiple consolidation ranges', add all ranges, and finish."
  },
  {
    question: "What happens when we check the Defer Layout Update option in PivotTable Fields window?",
    answer: "Dynamic changes won't appear while interchanging fields. Changes appear only after clicking Update button. Default is off (unchecked)."
  },
  {
    question: "How many report formats are available in Microsoft Excel?",
    answer: "Three: Compact Format, Outline Format, Tabular Format."
  },
  {
    question: "What do you mean by Pivot charts in Microsoft Excel?",
    answer: "Pivot charts are data visualization tools (Bar, Pie, Area, etc.) created from pivot tables. Select a cell in pivot table, then Insert tab > Pivot Chart."
  },
  {
    question: "What is the What If Analysis in Microsoft Excel?",
    answer: "A technique to change formulas and see how results are affected. Tools: Scenarios (up to 32 variables), Goal Seek (determine inputs from outputs), Data Tables."
  },
  {
    question: "What are the basic differences between COUNT, COUNTA and COUNTBLANK?",
    answer: "COUNT counts cells with numerical values only. COUNTA counts cells with any content (numbers, text, special characters). COUNTBLANK counts only blank cells."
  },
  {
    question: "How does the AND function work in Microsoft Excel?",
    answer: "AND returns TRUE if all conditions are satisfied, otherwise FALSE. Syntax: `AND(logical1, [logical2], ...)`."
  },
  {
    question: "What is meant by VLOOKUP in Microsoft Excel?",
    answer: "VLOOKUP (Vertical Lookup) looks up data from a vertically arranged range. It searches the leftmost column for a value and returns a value from a specified column in the same row."
  },
  {
    question: "How does the VLOOKUP function work in Microsoft Excel?",
    answer: "VLOOKUP searches the leftmost column for the lookup value, then moves right to the specified column number and returns the value. Syntax: `VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`. FALSE for exact match, TRUE for approximate."
  },
  {
    question: "Explain the exact match in Microsoft Excel with an example.",
    answer: "Set range_lookup to FALSE. Example: `=VLOOKUP(104, A1:D8, 3, FALSE)` finds employee ID 104 in column A and returns the designation from column 3."
  }
];