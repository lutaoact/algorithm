import java.lang.Integer;
import java.util.Map;
import java.util.List;
import java.util.LinkedList;
import java.util.HashMap;
import java.util.Queue;
/*
// Employee info
*/
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};

public class Solution {
  public int getImportance(List<Employee> employees, int id) {
    Map<Integer, Employee> map = new HashMap<Integer, Employee>();
    for (Employee employee : employees) {
      map.put(employee.id, employee);
    }
    Employee employee = map.get(id);
    int result = employee.importance;
    if (employee.subordinates.isEmpty()) {
      return result;
    }

    Queue<List<Integer>> queue = new LinkedList<List<Integer>>();
    queue.offer(employee.subordinates);

    while (!queue.isEmpty()) {
      List<Integer> subs = queue.poll();
      for (Integer subid : subs) {
        Employee sub = map.get(subid);
        result += sub.importance;
        if (!sub.subordinates.isEmpty()) {
          queue.offer(sub.subordinates);
        }
      }
    }
    return result;
  }
}
