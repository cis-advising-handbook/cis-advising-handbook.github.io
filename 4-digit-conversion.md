---
title: 4-Digit Course Number Conversion
toc: false
read_time: false
tags: 
---

Starting in Summer 2022, all courses across Penn transitioned from 3-digit course numbers to 4-digit numbers. 

In many cases the translation between the 3-digit and 4-digit numbers is straightforward. E.g., in CIS we have appended a `0` to the course number, with CIS 110 becoming CIS 1100 (...except for CIS 099 which became CIS 0099). However, some departments have taken the opportunity to reorganize their courses more substantively. 

<textarea id="xlatInput" placeholder="Enter text here, 3-digit course numbers will be translated into 4-digit ones">
</textarea>

<textarea id="xlatOutput" readonly placeholder="Translated output will appear here"></textarea>

<br/>
The table below is a best-effort attempt at mapping courses before and after the transition. For the curious, this data is also available [in JSON format](/assets/json/3d_to_4d_course_translation.json).

<table id="table_3to4" border="1" cellspacing="0" cellpadding="5">
<tr>
  <th>3-Digit Course</th>
  <th>4-Digit Course</th>
</tr>
<tr id="clickToFill" onclick="fillTable();">
  <td colspan="2"><a href="#">Click to show all entries</a> (takes a moment)
  </td>
</tr>
<!-- NB: rows of actual data are added by fillTable(), below -->
</table>

<script src="/assets/js/fill_course_translation_table.js" type="text/javascript"></script>
