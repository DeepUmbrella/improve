using System
using Unity.Engine


Console.WriteLine("hello word")



//* Define the delegate type
namespace DelegateDemo
{
  public delegate int Comparison<in T>(T left, T right);


  public class Vector3
  {

    public Vector3(float x, float y, float z)
    {
      X = x;
      Y = y;
      Z = z;
    }

    public static Vector3 operator *(float scalar, Vector3 vector)
    {
      return new Vector3(vector.X * scalar, vector.Y * scalar, vector.Z * scalar);
    };

    public static Vector3 operator +(Vector3 vector, float s)
    {

      return new Vector3(vector.X + s, vector.Y + s, vector.Z + s)
    };

  };




}

public DelegateDemo.Comparison<int> comparison


Vector3 vector3 = this.transform.forward

abstract class MonoBehavior
{
  int index_num;

  string _name;

  public MonoBehavior(int index, string name)
  {
    index_num = index;
    _name = name;
  }

  public float getUserName(string name)
}

class person : MonoBehavior
{

}
