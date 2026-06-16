// src/data/pandasQA.js
export const pandasQA = [
  {
    question: "Define the Pandas/Python pandas?",
    answer: "Pandas is an open-source library providing high-performance data manipulation in Python. The name comes from 'Panel Data'. It can perform load, manipulate, prepare, model, and analyze data, regardless of origin. Developed by Wes McKinney in 2008."
  },
  {
    question: "Mention the different types of Data Structures in Pandas?",
    answer: "Series (1D labeled array), DataFrame (2D labeled data structure with columns of different types), Index (immutable axis labels), and Panel (3D, deprecated)."
  },
  {
    question: "Define Series in Pandas?",
    answer: "A Series is a one-dimensional array capable of storing various data types. Row labels are called the index. Using the 'series' method, we can convert list, tuple, or dictionary into a Series. A Series cannot contain multiple columns."
  },
  {
    question: "How can we calculate the standard deviation from the Series?",
    answer: "Using the std() function: Series.std(axis=None, skipna=None, level=None, ddof=1, numeric_only=None, **kwargs)."
  },
  {
    question: "Define DataFrame in Pandas?",
    answer: "A DataFrame is a two-dimensional array with labeled axes (rows and columns). It can have heterogeneous column types (int, bool, etc.). It can be seen as a dictionary of Series structure with both row and column indexes."
  },
  {
    question: "What are the significant features of the pandas Library?",
    answer: "Memory Efficient, Data Alignment, Reshaping, Merge and join (similar to SQL), Time Series support (date range generation, frequency conversion, resampling)."
  },
  {
    question: "Explain Reindexing in pandas?",
    answer: "Reindexing conforms a DataFrame to a new index with optional filling logic. Places NA/NaN where values are missing in the previous index. Used to change row/column indexes."
  },
  {
    question: "What is the name of Pandas library tools used to create a scatter plot matrix?",
    answer: "scatter_matrix (scatterplot grid or pairs plot). It creates a matrix of scatterplots showing relationships between variables in a dataset."
  },
  {
    question: "Define the different ways a DataFrame can be created in pandas?",
    answer: "Using Lists, Dict of ndarrays, Series, from external files (CSV, Excel, etc.), or from NumPy arrays."
  },
  {
    question: "Explain Categorical data in Pandas?",
    answer: "A Pandas data type for categorical variables (limited, fixed possible values). Useful for: saving memory with string variables having few values, logical ordering (non-lexical), signaling other libraries to treat column as categorical."
  },
  {
    question: "How will you create a series from dict in Pandas?",
    answer: "Pass a dict to pd.Series(). If index not specified, dict keys sorted become index. If index passed, values corresponding to labels are extracted from dict."
  },
  {
    question: "How can we create a copy of the series in Pandas?",
    answer: "Using Series.copy(deep=True) for deep copy (copies data and indices). Set deep=False to copy only the reference (shallow copy)."
  },
  {
    question: "How will you create an empty DataFrame in Pandas?",
    answer: "pd.DataFrame() - creates an empty DataFrame with no columns or rows."
  },
  {
    question: "How will you add a column to a pandas DataFrame?",
    answer: "Assign a new column using df['new_column'] = values (list, Series, or array). Can also use df.assign() or insert() method."
  },
  {
    question: "How to add an Index, row, or column to a Pandas DataFrame?",
    answer: "Index: specify index argument when creating DataFrame. Rows: use .loc (label), .iloc (position), or .ix (mixed). Columns: assign directly or use loc/iloc."
  },
  {
    question: "How to Delete Indices, Rows or Columns From a Pandas Data Frame?",
    answer: "Delete index: reset_index(), del df.index.name, drop duplicate index values. Delete column: drop(axis=1) or del df['column']. Delete row: drop(axis=0) or drop_duplicates()."
  },
  {
    question: "How to Rename the Index or Columns of a Pandas DataFrame?",
    answer: "Use rename() method with dictionary mapping old to new values: index parameter for index, columns parameter for columns. Set inplace=True for in-place modification."
  },
  {
    question: "How to iterate over a Pandas DataFrame?",
    answer: "Use iterrows() (row-wise iteration), iteritems() (column-wise), or itertuples() (rows as namedtuples). Choose based on task."
  },
  {
    question: "How to get the items of series A not present in series B?",
    answer: "Use boolean indexing with isin(): p1[~p1.isin(p2)]"
  },
  {
    question: "How to get the items not common to both series A and series B?",
    answer: "Use union and intersect: p_u = pd.Series(np.union1d(p1,p2)); p_i = pd.Series(np.intersect1d(p1,p2)); p_u[~p_u.isin(p_i)]"
  },
  {
    question: "How to get the minimum, 25th percentile, median, 75th, and max of a numeric series?",
    answer: "Use np.percentile(p, q=[0,25,50,75,100])"
  },
  {
    question: "How to get frequency counts of unique items of a series?",
    answer: "Use value_counts() method: p.value_counts()"
  },
  {
    question: "How to convert a numpy array to a dataframe of given shape?",
    answer: "Use pd.DataFrame(array.reshape(rows, cols))"
  },
  {
    question: "How can we convert a Series to DataFrame?",
    answer: "Use Series.to_frame(name=None) method. Returns a DataFrame with the Series as a column."
  },
  {
    question: "What is Pandas NumPy array?",
    answer: "NumPy (Numerical Python) is a Python package for numerical computations and processing of multi-dimensional and single-dimensional arrays. Calculations using NumPy arrays are faster than normal Python arrays."
  },
  {
    question: "How can we convert DataFrame into a NumPy array?",
    answer: "Use DataFrame.to_numpy(dtype=None, copy=False) - returns numpy ndarray."
  },
  {
    question: "How can we convert DataFrame into an excel file?",
    answer: "Use to_excel() function. For single sheet: df.to_excel('filename.xlsx'). For multiple sheets, create ExcelWriter object."
  },
  {
    question: "How can we sort the DataFrame?",
    answer: "By label: sort_index() (sorts by row/column labels). By actual value: sort_values(by='column_name')."
  },
  {
    question: "What is Time Series in Pandas?",
    answer: "Time series data is essential for forecasting future values. Pandas provides robust tools for working with dates, times, and time-based data."
  },
  {
    question: "What is Time Offset?",
    answer: "Time offset (time zone offset) represents the difference in hours/minutes between local time and UTC. Expressed as UTC ± hours/minutes."
  },
  {
    question: "Define Time Periods?",
    answer: "Time Periods represent a time span (days, years, quarter, month, etc.). A class that allows converting frequency to periods."
  },
  {
    question: "How to convert String to date?",
    answer: "Use datetime.strptime(date_string, format). Example: datetime.strptime('Wednesday, July 14, 2018', '%A, %B %d, %Y')"
  },
  {
    question: "What is Data Aggregation?",
    answer: "Applying aggregation functions to columns: sum (returns sum of values), min (minimum), max (maximum), mean, count, etc."
  },
  {
    question: "What is Pandas Index?",
    answer: "Index is a vital tool for selecting particular rows and columns. It organizes data and provides fast data access, also called subset selection."
  },
  {
    question: "Define Multiple Indexing?",
    answer: "Multiple indexing (MultiIndex) deals with higher-dimensional data, allowing storage and manipulation of data with arbitrary number of dimensions in lower-dimensional structures like Series and DataFrame."
  },
  {
    question: "Define ReIndexing?",
    answer: "Reindexing changes row/column indexes using reindex() method. Missing values in new index are assigned NaN by default."
  },
  {
    question: "How to Set the index?",
    answer: "Use set_index() method: df.set_index('column_name', inplace=True). Or specify index when creating DataFrame."
  },
  {
    question: "How to Reset the index?",
    answer: "Use reset_index() method. For MultiIndex, can remove one or more levels."
  },
  {
    question: "Describe Data Operations in Pandas?",
    answer: "Row/column selection (using names, becomes Series), Filter Data (boolean expressions), Null values (NaN handling)."
  },
  {
    question: "Define GroupBy in Pandas?",
    answer: "groupby() function splits data into groups based on criteria, then allows aggregation, transformation, or filtering. Syntax: DataFrame.groupby(by=None, axis=0, level=None, as_index=True, sort=True, ...)"
  }
];